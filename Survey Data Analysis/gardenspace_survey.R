library("tidyr")
library("ggplot2")
library("dplyr")
library("stringr")

survey <- read.csv("survey.csv")

colnames(survey) <- c('Time', 'Age', 'Gender', 'Race_Ethnicity', 'Income', 'Experience', 'Knowledge', 'BestLearn', 'HowGrow', 'Community', 'WhatCommunity', 'OftenCommunity', 'WhyGarden', 'StruggleCommunity', 'Interview')

survey[survey$Race_Ethnicity == "White/asian", "Race_Ethnicity"] = "Asian;White"


## Race/Ethnicity

survey_race <- survey %>%
  group_by(Race_Ethnicity) %>%
  count() %>%
  ungroup %>%
  mutate(Percentage = round((n / sum(n)) * 100, digits = 2))

survey_race_separate <- survey %>%
  separate_rows(Race_Ethnicity, sep=";") %>%
  group_by(Race_Ethnicity) %>%
  count() %>%
  ungroup %>%
  mutate(Percentage = round((n / nrow(survey)) * 100, digits = 2))


plotInstance <- ggplot(survey_race_separate, aes(x="", y=Percentage, fill=str_wrap(Race_Ethnicity, 20))) +
  geom_bar(stat="identity", width=1, color = "white") +
  coord_polar("y", start=0) +
  theme_void() +
  geom_text(aes(label = paste0(Percentage, "%")), position = position_stack(vjust=0.5)) +
  labs(title = "Race/Ethnicity of Survey Participants (Instances)", x = NULL, y = NULL, fill = "Race/Ethnicity") +
  theme(plot.margin = margin(1,1,1.5,1.2, "cm"))

plotIntersectional <- ggplot(survey_race, aes(x="", y=Percentage, fill=str_wrap(Race_Ethnicity, 20))) +
  geom_bar(stat="identity", width=1, color = "white") +
  coord_polar("y", start=0) +
  theme_void() +
  geom_text(aes(label = paste0(Percentage, "%")), position = position_stack(vjust=0.5)) +
  labs(title = "Race/Ethnicity of Survey Participants (Intersectional)", x = NULL, y = NULL, fill = "Race/Ethnicity") +
  theme(plot.margin = margin(1,1,1.5,1.2, "cm"))

## Experience and Knowledge

survey_experience_knowledge <- survey %>%
  select(Experience, Knowledge) %>%
  gather(key="Type", value="Level", 1:2)

survey_experience_knowledge2 <- survey %>%
  select(Experience, Knowledge)

experience_knowledge_bar <- ggplot(survey_experience_knowledge, aes(fill = Type, x=Level)) +
  geom_bar(stat="count", position = "dodge") +
  labs(title=str_wrap("Distribution of Experience and Knowledge Levels of Gardening", 50)) +
  scale_y_continuous("Count") +
  geom_text(aes(label = after_stat(count)), stat="count", vjust = -0.2, position = position_dodge(.9))

experience_knowledge_heat <- data.frame(table(survey_experience_knowledge2))
experience_knowledge_heat <- ggplot(experience_knowledge_heat, aes(x=Experience,y=Knowledge)) +
  geom_tile(aes(fill=Freq)) +
  geom_text(aes(label=Freq)) +
  scale_fill_gradientn(colours = terrain.colors(40))+
  labs(title = "Concentration of Knowledge/Experience Levels of Gardening")

survey_experience_knowledge_bipoc <- survey %>%
  separate_rows(Race_Ethnicity, sep=";") %>%
  filter(Race_Ethnicity == "African-American/Black" |
           Race_Ethnicity == "Indigenous American/First Nations") %>%
  select(Experience, Knowledge)

survey_experience_knowledge_nonwhite <- survey %>%
  separate_rows(Race_Ethnicity, sep=";") %>%
  filter(Race_Ethnicity != "White" &
           Race_Ethnicity != "Human" &
           Race_Ethnicity != "Prefer not to share") %>%
  select(Experience, Knowledge)

survey_experience_knowledge_white <- survey %>%
  separate_rows(Race_Ethnicity, sep=";") %>%
  select(Race_Ethnicity, Experience, Knowledge) %>%
  filter(Race_Ethnicity == "White")

experience_knowledge_bipoc_heat <- data.frame(table(survey_experience_knowledge_bipoc))
experience_knowledge_bipoc_heat <- ggplot(experience_knowledge_bipoc_heat, aes(x=Experience,y=Knowledge)) +
  geom_tile(aes(fill=Freq)) +
  geom_text(aes(label=Freq)) +
  scale_fill_gradientn(colours = terrain.colors(40))+
  labs(title = str_wrap("Concentration of Knowledge/Experience Levels in BIPOC Gardeners", 50))

experience_knowledge_white_heat <- data.frame(table(survey_experience_knowledge_white))
experience_knowledge_white_hear <- ggplot(experience_knowledge_white_heat, aes(x=Experience,y=Knowledge)) +
  geom_tile(aes(fill=Freq)) +
  geom_text(aes(label=Freq)) +
  scale_fill_gradientn(colours = terrain.colors(40))+
  labs(title = str_wrap("Concentration of Knowledge/Experience Levels in White Gardeners", 50))

experience_knowledge_nonwhite_heat <- data.frame(table(survey_experience_knowledge_nonwhite))
experience_knowledge_nonwhite_heat <- ggplot(experience_knowledge_nonwhite_heat, aes(x=Experience,y=Knowledge)) +
  geom_tile(aes(fill=Freq)) +
  geom_text(aes(label=Freq)) +
  scale_fill_gradientn(colours = terrain.colors(40))+
  labs(title = str_wrap("Concentration of Knowledge/Experience Levels in Non-White Gardeners", 50))

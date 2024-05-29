import { QuestionsProps } from "./interface";
export const uniqueID = () => Math.floor(Math.random() * 100000000);
export const questionsData: QuestionsProps[] = [
    {
      id: uniqueID(),
      name: "I want to work part-time, is that possible",
      isGeneral: true,
      isProcess: false,
    },
    {
      id: uniqueID(),
      name: "How long are the average projects?",
      isGeneral: false,
      isProcess: false,
    },
    {
      id: uniqueID(),
      name: "How does the payment works?",
      isGeneral: false,
      isProcess: false,
    },
    {
      id: uniqueID(),
      name: "How much can I earn?",
      isGeneral: false,
      isProcess: false,
    },
    {
      id: uniqueID(),
      name: "I want to work part-time, is that possible",
      isGeneral: true,
      isProcess: true,
    },
    {
      id: uniqueID(),
      name: "How long are the average projects?",
      isGeneral: false,
      isProcess: false,
    },
    {
      id: uniqueID(),
      name: "How long are the average projects?",
      isGeneral: false,
      isProcess: false,
    },
    {
      id: uniqueID(),
      name: "How does the payment works?",
      isGeneral: false,
      isProcess: false,
    },
  ];

  export const technicalRecruitmenData = [
    {
      id: uniqueID(),
      name: "Resume Screening",
    },
    {
      id: uniqueID(),
      name: "Technical Interview",
    },
    {
      id: uniqueID(),
      name: "HR Interview",
    },
    {
      id: uniqueID(),
      name: "Final Approval",
    },
    {
      id: uniqueID(),
      name: "Onboarding",
    },
  ];
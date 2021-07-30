export enum TaskType {
  TEST = 'test',
  CODE = 'code',
  PRESENTATION = 'presentation',
  INTERVIEW = 'interview',
}

export enum Tag {
  HTML = 'html',
  CSS = 'css',
  JS = 'javascript',
  TS = 'typescript',
  GIT = 'git',
  DOC = 'documentation',
  DEVTOOLS = 'development tools',
}

export enum CheckType {
  AUTO_TEST = 'Auto-Test',
  CROSS_CHECK = 'Cross-Check',
  MENTOR_CHECK = 'Mentor-Check',
}

export interface TaskOwner {
  id: number;
  githubId: string;
  name: string;
}

export interface Period {
  start: Date;
  end: Date;
}

export interface Check {
  maxScore: number;
  scoreWeight: number;
}

export interface ManualCheck extends Check {
  dedicatedTime: Period;
}

export interface RSSTask {
  id: number;
  name: string;
  description?: string;
  descriptionUrl?: string;
  imageUrl?: string;
  tags: Tag[];
  taskOwner?: TaskOwner;
  taskType: TaskType;
  dedicatedTime: Period;
  autoCheck?: Check;
  crossCheck?: ManualCheck;
  mentorCheck?: ManualCheck;
  passStudents?: number;
}

export const getCheckType = ({
  autoCheck,
  crossCheck,
  mentorCheck,
}: RSSTask): CheckType[] =>
  [
    autoCheck && CheckType.AUTO_TEST,
    crossCheck && CheckType.CROSS_CHECK,
    mentorCheck && CheckType.MENTOR_CHECK,
  ].filter(Boolean) as CheckType[];

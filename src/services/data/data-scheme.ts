export enum LectureType {
  RECORD = 'recorded lecture',
  STREAM = 'live stream',
}

export enum TaskType {
  TEST = 'test',
  CODE = 'code',
  PRESENTATION = 'presentation',
  INTERVIEW = 'interview',
}

export enum EventType {
  LECTURE = 'lecture',
  TASK = 'task',
}

export enum Platform {
  YOUTUBE = 'youtube',
  DISCORD = 'discord',
  SKYPE = 'skype',
  ZOOM = 'zoom',
  OTHER = 'other',
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

export interface RSSEventBase {
  type: EventType;
  id: number;
  name: string;
  description?: string;
  descriptionUrl?: string;
  imageUrl?: string;
  tags: Tag[];
  taskOwner?: TaskOwner;
}

export interface RSSLecture extends RSSEventBase {
  type: EventType.LECTURE;
  lectureType: LectureType;
  platform: Platform;
  date: Date;
  duration: number;
}

export interface Check {
  maxScore: number;
  scoreWeight: number;
}

export interface ManualCheck extends Check {
  dedicatedTime: Period;
}

export interface RSSTask extends RSSEventBase {
  type: EventType.TASK;
  taskType: TaskType;
  dedicatedTime: Period;
  autoCheck?: Check;
  crossCheck?: ManualCheck;
  mentorCheck?: ManualCheck;
  passStudents?: number;
}

export type RSSEvent = RSSLecture | RSSTask;

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

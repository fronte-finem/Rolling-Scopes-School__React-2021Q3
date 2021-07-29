import {
  EventType,
  LectureType,
  Platform,
  RSSEvent,
  Tag,
  TaskType,
} from './data-scheme';

export const getData = (): RSSEvent[] => [
  {
    id: 1,
    type: EventType.TASK,
    taskType: TaskType.TEST,
    tags: [Tag.HTML, Tag.CSS],
    name: 'HTML/CSS Test #0',
    descriptionUrl:
      'https://rolling-scopes-school.github.io/stage0/#/stage0/tests/index',
    dedicatedTime: {
      start: new Date('2020-11-26T00:59:00'),
      end: new Date('2021-03-09T02:59:00'),
    },
    taskOwner: {
      id: 11,
      githubId: 'irinainina',
      name: 'Irina Inina',
    },
    autoCheck: {
      maxScore: 100,
      scoreWeight: 0.1,
    },
    passStudents: 3714,
  },

  {
    id: 2,
    type: EventType.TASK,
    taskType: TaskType.TEST,
    tags: [Tag.JS],
    name: 'JS Test #0',
    description: '',
    descriptionUrl:
      'https://rolling-scopes-school.github.io/stage0/#/stage0/tests/index',
    dedicatedTime: {
      start: new Date('2020-11-26T00:59:00'),
      end: new Date('2021-03-09T02:59:00'),
    },
    taskOwner: {
      id: 11,
      githubId: 'irinainina',
      name: 'Irina Inina',
    },
    autoCheck: {
      maxScore: 100,
      scoreWeight: 0.1,
    },
    passStudents: 3425,
  },

  {
    id: 4,
    type: EventType.TASK,
    taskType: TaskType.TEST,
    tags: [Tag.JS],
    name: 'Basic JS',
    descriptionUrl: 'https://github.com/AlreadyBored/basic-js',
    dedicatedTime: {
      start: new Date('2021-01-20T19:00:00'),
      end: new Date('2021-03-31T01:59:00'),
    },
    taskOwner: {
      id: 12,
      githubId: 'alreadybored',
      name: 'Maxim Shylau',
    },
    autoCheck: {
      maxScore: 100,
      scoreWeight: 0.5,
    },
    passStudents: 2125,
  },

  {
    id: 6,
    type: EventType.TASK,
    taskType: TaskType.CODE,
    tags: [Tag.GIT, Tag.HTML, Tag.CSS],
    name: 'HTML, CSS & Git Basics',
    descriptionUrl:
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/cv/html-css-git.md',
    dedicatedTime: {
      start: new Date('2021-02-27T05:54:00'),
      end: new Date('2021-03-09T02:59:00'),
    },
    taskOwner: {
      id: 11,
      githubId: 'irinainina',
      name: 'Irina Inina',
    },
    crossCheck: {
      maxScore: 100,
      scoreWeight: 0.2,
      dedicatedTime: {
        start: new Date('2021-03-10T13:00:00'),
        end: new Date('2021-03-13T02:59:00'),
      },
    },
    passStudents: 2165,
  },

  {
    id: 11,
    type: EventType.TASK,
    taskType: TaskType.CODE,
    tags: [Tag.HTML, Tag.CSS],
    name: 'Wildlife',
    descriptionUrl:
      'https://rolling-scopes-school.github.io/stage0/#/stage0/tasks/wildlife',
    dedicatedTime: {
      start: new Date('2021-02-28T19:22:00'),
      end: new Date('2021-03-12T02:59:00'),
    },
    crossCheck: {
      maxScore: 50,
      scoreWeight: 0.5,
      dedicatedTime: {
        start: new Date('2021-03-16T13:00:00'),
        end: new Date('2021-03-19T02:59:00'),
      },
    },
    passStudents: 2016,
  },

  {
    id: 21,
    type: EventType.TASK,
    taskType: TaskType.CODE,
    tags: [Tag.JS],
    name: 'Virtual-piano',
    descriptionUrl:
      'https://rolling-scopes-school.github.io/stage0/#/stage1/tasks/js-projects/virtual-piano',
    dedicatedTime: {
      start: new Date('2021-03-16T07:32:00'),
      end: new Date('2021-03-23T04:59:00'),
    },
    taskOwner: {
      id: 11,
      githubId: 'irinainina',
      name: 'Irina Inina',
    },
    crossCheck: {
      maxScore: 50,
      scoreWeight: 1,
      dedicatedTime: {
        start: new Date('2021-03-23T13:00:00'),
        end: new Date('2021-03-26T02:59:00'),
      },
    },
    passStudents: 1825,
  },

  {
    id: 22,
    type: EventType.TASK,
    taskType: TaskType.CODE,
    tags: [Tag.HTML, Tag.CSS, Tag.JS],
    name: 'Online-zoo',
    descriptionUrl:
      'https://rolling-scopes-school.github.io/stage0/#/stage1/tasks/online-zoo/online-zoo',
    dedicatedTime: {
      start: new Date('2021-03-23T23:00:00'),
      end: new Date('2021-04-24T02:59:00'),
    },
    taskOwner: {
      id: 14,
      githubId: 'sergeyshalyapin',
      name: 'Sergey Shalyapin',
    },
    crossCheck: {
      maxScore: 200,
      scoreWeight: 1,
      dedicatedTime: {
        start: new Date('2021-04-24T13:00:00'),
        end: new Date('2021-04-27T02:59:00'),
      },
    },
    passStudents: 710,
  },

  {
    id: 23,
    type: EventType.TASK,
    taskType: TaskType.CODE,
    tags: [Tag.HTML, Tag.CSS],
    name: 'Clean-code-s1e1',
    descriptionUrl:
      'https://rolling-scopes-school.github.io/stage0/#/stage1/tasks/clean-code/clean-code-s1e1',
    dedicatedTime: {
      start: new Date('2021-03-23T04:59:00'),
      end: new Date('2021-04-07T02:59:00'),
    },
    taskOwner: {
      id: 13,
      githubId: 'viktoryiayatskova',
      name: 'Viktoryia Yatskova',
    },
    crossCheck: {
      maxScore: 45,
      scoreWeight: 1,
      dedicatedTime: {
        start: new Date('2021-04-07T13:00:00'),
        end: new Date('2021-04-10T02:59:00'),
      },
    },
    passStudents: 1264,
  },

  {
    id: 24,
    type: EventType.TASK,
    taskType: TaskType.TEST,
    tags: [Tag.JS],
    name: 'Codewars #1',
    descriptionUrl:
      'https://rolling-scopes-school.github.io/stage0/#/stage1/tasks/codewars',
    dedicatedTime: {
      start: new Date('2021-03-16T08:22:00'),
      end: new Date('2021-03-31T01:59:00'),
    },
    taskOwner: {
      id: 11,
      githubId: 'irinainina',
      name: 'Irina Inina',
    },
    autoCheck: {
      maxScore: 65,
      scoreWeight: 0.5,
    },
    passStudents: 1996,
  },

  {
    id: 31,
    type: EventType.TASK,
    taskType: TaskType.PRESENTATION,
    tags: [],
    name: 'https://rolling-scopes-school.github.io/stage0/#/stage1/tasks/self-introduction/self-introduction',
    descriptionUrl:
      'https://rolling-scopes-school.github.io/stage0/#/stage1/tasks/clean-code/clean-code-s1e1',
    dedicatedTime: {
      start: new Date('2021-04-09T18:00:00'),
      end: new Date('2021-04-20T02:59:00'),
    },
    taskOwner: {
      id: 2,
      githubId: 'amoebiusss',
      name: 'Alena Vasilchenko',
    },
    crossCheck: {
      maxScore: 100,
      scoreWeight: 1,
      dedicatedTime: {
        start: new Date('2021-04-20T13:00:00'),
        end: new Date('2021-04-23T02:59:00'),
      },
    },
    passStudents: 934,
  },

  {
    id: 41,
    type: EventType.TASK,
    taskType: TaskType.CODE,
    tags: [Tag.JS],
    name: 'Photo-filter',
    descriptionUrl:
      'https://rolling-scopes-school.github.io/stage0/#/stage1/tasks/js-projects/photo-filter',
    dedicatedTime: {
      start: new Date('2021-04-20T13:23:00'),
      end: new Date('2021-04-27T02:59:00'),
    },
    taskOwner: {
      id: 11,
      githubId: 'irinainina',
      name: 'Irina Inina',
    },
    crossCheck: {
      maxScore: 60,
      scoreWeight: 1,
      dedicatedTime: {
        start: new Date('2021-04-27T13:00:00'),
        end: new Date('2021-04-30T02:59:00'),
      },
    },
    passStudents: 996,
  },

  {
    id: 51,
    type: EventType.TASK,
    taskType: TaskType.INTERVIEW,
    tags: [Tag.HTML, Tag.CSS, Tag.JS],
    name: 'Technical Screening',
    descriptionUrl: 'https://docs.rs.school/#/technical-screening',
    dedicatedTime: {
      start: new Date('2021-05-04T03:00:00'),
      end: new Date('2021-05-19T02:59:00'),
    },
    taskOwner: {
      id: 1,
      githubId: 'dzmitry-varabei',
      name: 'Dzmitry Varabei',
    },
    mentorCheck: {
      maxScore: 50,
      scoreWeight: 1,
      dedicatedTime: {
        start: new Date('2021-05-04T03:00:00'),
        end: new Date('2021-05-19T02:59:00'),
      },
    },
    passStudents: 710,
  },

  {
    id: 52,
    type: EventType.TASK,
    taskType: TaskType.TEST,
    tags: [Tag.JS],
    name: 'Codewars #2',
    descriptionUrl:
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/codewars2.md',
    dedicatedTime: {
      start: new Date('2021-05-07T17:00:00'),
      end: new Date('2021-06-01T02:59:00'),
    },
    taskOwner: {
      id: 3,
      githubId: 'natein',
      name: 'Natein',
    },
    autoCheck: {
      maxScore: 81,
      scoreWeight: 0.5,
    },
    passStudents: 785,
  },

  {
    id: 53,
    type: EventType.TASK,
    taskType: TaskType.CODE,
    tags: [Tag.HTML, Tag.CSS, Tag.TS],
    name: 'Match-Match Game',
    descriptionUrl:
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/match-match-game.md',
    dedicatedTime: {
      start: new Date('2021-05-11T03:01:00'),
      end: new Date('2021-06-01T02:59:00'),
    },
    taskOwner: {
      id: 15,
      githubId: 'jegius',
      name: 'Ivan Alekseev',
    },
    crossCheck: {
      maxScore: 110,
      scoreWeight: 1,
      dedicatedTime: {
        start: new Date('2021-06-01T13:00:00'),
        end: new Date('2021-06-04T02:59:00'),
      },
    },
    mentorCheck: {
      maxScore: 160,
      scoreWeight: 1,
      dedicatedTime: {
        start: new Date('2021-06-01T13:00:00'),
        end: new Date('2021-06-15T02:59:00'),
      },
    },
    passStudents: 531,
  },

  {
    id: 54,
    type: EventType.TASK,
    taskType: TaskType.PRESENTATION,
    tags: [],
    name: 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/presentation.md',
    descriptionUrl: 'Presentation (recorded)',
    dedicatedTime: {
      start: new Date('2021-05-21T13:36:00'),
      end: new Date('2021-06-22T02:59:00'),
    },
    taskOwner: {
      id: 2,
      githubId: 'amoebiusss',
      name: 'Alena Vasilchenko',
    },
    mentorCheck: {
      maxScore: 120,
      scoreWeight: 1,
      dedicatedTime: {
        start: new Date('2021-06-22T13:00:00'),
        end: new Date('2021-07-22T02:59:00'),
      },
    },
    passStudents: 404,
  },

  {
    id: 55,
    type: EventType.TASK,
    taskType: TaskType.PRESENTATION,
    tags: [],
    name: 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/presentation.md',
    descriptionUrl: 'Presentation (live)',
    dedicatedTime: {
      start: new Date('2021-06-22T10:39:00'),
      end: new Date('2021-06-28T23:59:00'),
    },
    taskOwner: {
      id: 2,
      githubId: 'amoebiusss',
      name: 'Alena Vasilchenko',
    },
    passStudents: 77,
  },

  {
    id: 61,
    type: EventType.TASK,
    taskType: TaskType.CODE,
    tags: [Tag.HTML, Tag.CSS, Tag.TS],
    name: 'Async Race',
    descriptionUrl:
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/async-race.md',
    dedicatedTime: {
      start: new Date('2021-06-02T02:59:00'),
      end: new Date('2021-06-17T02:59:00'),
    },
    taskOwner: {
      id: 16,
      githubId: 'mikhama',
      name: 'Dzmitry Tsebruk',
    },
    crossCheck: {
      maxScore: 190,
      scoreWeight: 1,
      dedicatedTime: {
        start: new Date('2021-06-17T13:00:00'),
        end: new Date('2021-06-20T02:59:00'),
      },
    },
    mentorCheck: {
      maxScore: 150,
      scoreWeight: 1,
      dedicatedTime: {
        start: new Date('2021-06-17T13:00:00'),
        end: new Date('2021-06-30T02:59:00'),
      },
    },
    passStudents: 469,
  },

  {
    id: 71,
    type: EventType.TASK,
    taskType: TaskType.CODE,
    tags: [Tag.HTML, Tag.CSS, Tag.TS],
    name: 'English for kids S1E1',
    descriptionUrl:
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/rslang/english-for-kids.md',
    dedicatedTime: {
      start: new Date('2021-06-17T02:59:00'),
      end: new Date('2021-07-08T02:59:00'),
    },
    taskOwner: {
      id: 15,
      githubId: 'jegius',
      name: 'Ivan Alekseev',
    },
    crossCheck: {
      maxScore: 275,
      scoreWeight: 1,
      dedicatedTime: {
        start: new Date('2021-07-08T13:00:00'),
        end: new Date('2021-07-16T02:59:00'),
      },
    },
    mentorCheck: {
      maxScore: 360,
      scoreWeight: 1,
      dedicatedTime: {
        start: new Date('2021-07-08T13:00:00'),
        end: new Date('2021-07-24T02:59:00'),
      },
    },
    passStudents: 372,
  },

  {
    id: 72,
    type: EventType.TASK,
    taskType: TaskType.CODE,
    tags: [Tag.HTML, Tag.CSS, Tag.TS],
    name: 'Chess',
    descriptionUrl:
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/chess/codejam-chess-part-two.md',
    dedicatedTime: {
      start: new Date('2021-06-17T02:59:00'),
      end: new Date('2021-07-20T02:59:00'),
    },
    taskOwner: {
      id: 15,
      githubId: 'jegius',
      name: 'Ivan Alekseev',
    },
    crossCheck: {
      maxScore: 480,
      scoreWeight: 1,
      dedicatedTime: {
        start: new Date('2021-07-20T13:00:00'),
        end: new Date('2021-07-24T02:59:00'),
      },
    },
    mentorCheck: {
      maxScore: 715,
      scoreWeight: 1,
      dedicatedTime: {
        start: new Date('2021-07-20T13:00:00'),
        end: new Date('2021-07-27T02:59:00'),
      },
    },
    passStudents: 29,
  },

  {
    id: 73,
    type: EventType.TASK,
    taskType: TaskType.INTERVIEW,
    tags: [Tag.JS],
    name: 'CoreJS Interview',
    descriptionUrl:
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/interview-corejs.md',
    dedicatedTime: {
      start: new Date('2021-06-18T02:59:00'),
      end: new Date('2021-07-27T02:59:00'),
    },
    taskOwner: {
      id: 3,
      githubId: 'valerydluski',
      name: 'Valery',
    },
    mentorCheck: {
      maxScore: 10,
      scoreWeight: 10,
      dedicatedTime: {
        start: new Date('2021-06-18T02:59:00'),
        end: new Date('2021-07-27T02:59:00'),
      },
    },
  },

  {
    id: 74,
    type: EventType.LECTURE,
    lectureType: LectureType.STREAM,
    tags: [],
    platform: Platform.YOUTUBE,
    name: 'Q&A: Chess + English for kids',
    descriptionUrl: 'https://youtube.com/',
    date: new Date('2021-06-24T17:00:00'),
    duration: 2,
    taskOwner: {
      id: 15,
      githubId: 'jegius',
      name: 'Ivan Alekseev',
    },
  },

  {
    id: 75,
    type: EventType.LECTURE,
    lectureType: LectureType.STREAM,
    tags: [],
    platform: Platform.YOUTUBE,
    name: 'Refactoring Lecture',
    descriptionUrl: 'https://youtube.com/',
    date: new Date('2021-07-01T19:30:00'),
    duration: 1.5,
    taskOwner: {
      id: 22,
      githubId: 'nikitzu',
      name: 'Mikita Zhuikou',
    },
  },

  {
    id: 76,
    type: EventType.LECTURE,
    lectureType: LectureType.STREAM,
    tags: [],
    platform: Platform.YOUTUBE,
    name: 'NodeJS. Live Coding',
    descriptionUrl: 'https://youtube.com/',
    date: new Date('2021-07-06T18:30:00'),
    duration: 2.5,
    taskOwner: {
      id: 21,
      githubId: 'ai297',
      name: 'Kris Casper',
    },
  },

  {
    id: 81,
    type: EventType.TASK,
    taskType: TaskType.CODE,
    tags: [Tag.HTML, Tag.CSS, Tag.TS],
    name: 'English for kids S1E2',
    descriptionUrl:
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/rslang/english-for-kids-admin-panel.md',
    dedicatedTime: {
      start: new Date('2021-07-08T02:59:00'),
      end: new Date('2021-07-16T02:59:00'),
    },
    taskOwner: {
      id: 15,
      githubId: 'jegius',
      name: 'Ivan Alekseev',
    },
    crossCheck: {
      maxScore: 205,
      scoreWeight: 1,
      dedicatedTime: {
        start: new Date('2021-07-16T13:00:00'),
        end: new Date('2021-07-24T02:59:00'),
      },
    },
    mentorCheck: {
      maxScore: 355,
      scoreWeight: 1,
      dedicatedTime: {
        start: new Date('2021-07-16T13:00:00'),
        end: new Date('2021-07-24T02:59:00'),
      },
    },
    passStudents: 274,
  },

  {
    id: 82,
    type: EventType.LECTURE,
    lectureType: LectureType.STREAM,
    tags: [],
    platform: Platform.YOUTUBE,
    name: 'Node.js Basic',
    descriptionUrl: 'https://youtube.com/',
    date: new Date('2021-07-08T18:00:00'),
    duration: 2,
    taskOwner: {
      id: 15,
      githubId: 'jegius',
      name: 'Ivan Alekseev',
    },
  },
];

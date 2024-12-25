export type ListItem = {
  date: string;
  content: string;
};

export type Mode =
  | "search"
  | "chat"
  | "image"
  | "stock"
  | "weather"
  | "dictionary"
  |"linkedin"
  | "";

export type FileInfo = {
  name: string;
  size: number;
  date: string;
  url: string;
};

export type MessageContent =
  | { type: "text"; text: string }
  | {
      type: "image_url";
      image_url: {
        url: string;
      };
    };

export type Message = {
  role: "system" | "user" | "assistant";
  content: string | MessageContent[];
};

export type Citation = {
  number: number;
  url: string;
};

export type Chat = {
  mode?: Mode;
  arg?: any;
  question: string;
  answer: string;
  query?: string;
  fileInfo?: FileInfo;
  searchResults?: SearchType;
  stocksResults?: StockType;
  weatherResults?: WeatherType;
  dictionaryResults?: DictionaryType;
  linkedinResults?: LinkedinType;
};

export type SearchType = {
  data: {
    webPages?: {
      value: {
        name: string;
        url: string;
        snippet: string;
      }[];
    };
    images?: {
      value: {
        thumbnailUrl: string;
        hostPageUrl: string;
      }[];
    };
    videos?: {
      value: {
        thumbnailUrl: string;
        hostPageUrl: string;
      }[];
    };
  };
};

export type StockType = {
  companyName: string;
  ticker: string;
  exchange: string;
  currentPrice: number;
  change: {
    amount: number;
    percentage: number;
  };
  chartData:
    | {
        timestamp: string;
        price: number;
      }[]
    | [];
  open: number;
  high: number;
  low: number;
  previousClose: number;
  marketCap: number;
  peRatio: number;
  dividendYield: string;
  high52Week: number;
  low52Week: number;
};

export type WeatherType = {
  city: string;
  current: {
    temperature: number;
    weather: string;
    description: string;
    icon: string;
  };
  hourly: {
    time: string;
    temperature: number;
    weather: string;
    icon: string;
  }[];
  daily: {
    maxTemp: number;
    minTemp: number;
  };
};

export type DictionaryType = {
  word: string;
  phonetic: string;
  phonetics: {
    text: string;
    audio: string;
    sourceUrl: any;
    license: any;
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example?: string;
    }[];
  }[];
};


export type LinkedinType = {
  success: boolean;
  status: number;
  linkedinUrl: string;
  person_data: PersonData;
};

type PersonData = {
  id: string;
  displayName: string;
  firstName: string;
  lastName: string;
  phoneNumbers: string[];
  headline: string;
  companyName: string;
  location: string;
  photoUrl: string;
  linkedInUrl: string;
  reportProfileUrl: string;
  connectionDegree: string;
  connectionStatus: string;
  locale: Locale;
  schools: Schools;
  positions: Positions;
  skillEndorsements: SkillEndorsements;
  newsMentions: NewsMentions;
  userGeneratedContents: UserGeneratedContents;
  isPublic: boolean;
};

type Locale = {
  country: string;
  language: string;
};

type Schools = {
  educationsCount: number;
  educationHistory: EducationHistory[];
};

type EducationHistory = {
  school: School;
  degreeName: string;
  startEndDate: StartEndDate;
  fieldOfStudy: string;
  schoolName: string;
  schoolLocation: string;
  schoolLogo: string;
  linkedInUrl: string;
};

type School = {
  schoolName: string;
  schoolLocation: string;
  schoolLogo: string;
  linkedInUrl: string;
};

type StartEndDate = {
  start: DateDetails;
  end?: DateDetails;
};

type DateDetails = {
  month: number;
  year: number;
};

type Positions = {
  positionsCount: number;
  positionHistory: PositionHistory[];
};

type PositionHistory = {
  title: string;
  startEndDate: StartEndDate;
  company: Company;
  companyName: string;
  companyLocation: string;
  companyLogo: string;
  linkedInUrl: string;
  description?: string;
};

type Company = {
  companyName: string;
  companyLocation: string;
  companyLogo: string;
  linkedInUrl: string;
};

type SkillEndorsements = {
  skillEndorsementsCount: number;
  skillEndorsements: any[];
};

type NewsMentions = {
  newsMentionCount: number;
  newsMentions: any[];
};

type UserGeneratedContents = {
  userGeneratedContentCount: number;
  userGeneratedContents: any[];
};


export type ChatThread = {
  id: string;
  chats: Chat[];
  messages: Message[];
  shared?: boolean;
};

export type LibraryItem = {
  id: string;
  name: string;
  size: number;
  url: string;
  date: string;
};

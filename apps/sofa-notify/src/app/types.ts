export interface Root {
    events: Event[]
  }
  
  export interface Event {
    statistics: Statistic[];
    tournament: Tournament
    season?: Season
    roundInfo?: RoundInfo
    customId: string
    status: Status
    homeTeam: HomeTeam
    awayTeam: AwayTeam
    homeScore: HomeScore
    awayScore: AwayScore
    time: Time
    changes: Changes
    hasGlobalHighlights: boolean
    hasXg?: boolean
    hasEventPlayerStatistics?: boolean
    hasEventPlayerHeatMap?: boolean
    detailId?: number
    crowdsourcingDataDisplayEnabled: boolean
    id: number
    statusTime?: StatusTime
    crowdsourcingEnabled: boolean
    startTimestamp: number
    slug: string
    lastPeriod?: string
    finalResultOnly: boolean
    isEditor?: boolean
    awayRedCards?: number
    homeRedCards?: number
    coverage?: number
  }
  
  export interface Tournament {
    name: string
    slug: string
    category: Category
    uniqueTournament?: UniqueTournament
    priority: number
    id: number
  }
  
  export interface Category {
    name: string
    slug: string
    sport: Sport
    id: number
    country: Country
    flag: string
    alpha2?: string
  }
  
  export interface Sport {
    name: string
    slug: string
    id: number
  }
  
  export interface Country {
    alpha2?: string
    name?: string
  }
  
  export interface UniqueTournament {
    name: string
    slug: string
    secondaryColorHex?: string
    category: Category2
    userCount: number
    id: number
    country: Country3
    hasEventPlayerStatistics: boolean
    crowdsourcingEnabled: boolean
    hasPerformanceGraphFeature: boolean
    displayInverseHomeAwayTeams: boolean
    primaryColorHex?: string
  }
  
  export interface Category2 {
    name: string
    slug: string
    sport: Sport2
    id: number
    country: Country2
    flag: string
    alpha2?: string
  }
  
  export interface Sport2 {
    name: string
    slug: string
    id: number
  }
  
  export interface Country2 {
    alpha2?: string
    name?: string
  }
  
  export interface Country3 {}
  
  export interface Season {
    name: string
    year: string
    editor: boolean
    id: number
    seasonCoverageInfo?: SeasonCoverageInfo
  }
  
  export interface SeasonCoverageInfo {
    editorCoverageLevel: number
  }
  
  export interface RoundInfo {
    round: number
    name?: string
    slug?: string
  }
  
  export interface Status {
    code: number
    description: string
    type: string
  }
  
  export interface HomeTeam {
    name: string
    slug: string
    shortName: string
    gender?: string
    sport: Sport3
    userCount: number
    nameCode: string
    disabled?: boolean
    national: boolean
    type: number
    id: number
    country: Country4
    subTeams: any[]
    teamColors: TeamColors
    fieldTranslations?: FieldTranslations
  }
  
  export interface Sport3 {
    name: string
    slug: string
    id: number
  }
  
  export interface Country4 {
    alpha2: string
    name: string
  }
  
  export interface TeamColors {
    primary: string
    secondary: string
    text: string
  }
  
  export interface FieldTranslations {
    nameTranslation: NameTranslation
    shortNameTranslation: ShortNameTranslation
  }
  
  export interface NameTranslation {
    ar: string
  }
  
  export interface ShortNameTranslation {}
  
  export interface AwayTeam {
    name: string
    slug: string
    shortName: string
    gender?: string
    sport: Sport4
    userCount: number
    nameCode: string
    disabled?: boolean
    national: boolean
    type: number
    id: number
    country: Country5
    subTeams: any[]
    teamColors: TeamColors2
    fieldTranslations?: FieldTranslations2
  }
  
  export interface Sport4 {
    name: string
    slug: string
    id: number
  }
  
  export interface Country5 {
    alpha2: string
    name: string
  }
  
  export interface TeamColors2 {
    primary: string
    secondary: string
    text: string
  }
  
  export interface FieldTranslations2 {
    nameTranslation: NameTranslation2
    shortNameTranslation: ShortNameTranslation2
  }
  
  export interface NameTranslation2 {
    ar: string
  }
  
  export interface ShortNameTranslation2 {}
  
  export interface HomeScore {
    current: number
    display: number
    period1?: number
    period2?: number
    normaltime?: number
  }
  
  export interface AwayScore {
    current: number
    display: number
    period1?: number
    normaltime?: number
    period2?: number
  }
  
  export interface Time {
    initial?: number
    max?: number
    extra?: number
    currentPeriodStartTimestamp: number
    injuryTime1?: number
  }
  
  export interface Changes {
    changes?: string[]
    changeTimestamp: number
  }
  
  export interface StatusTime {
    prefix: string
    initial: number
    max: number
    timestamp: number
    extra: number
  }
  
  export interface RootStatistics {
    statistics: Statistic[]
  }
  
  export interface Statistic {
    period: string
    groups: Group[]
  }
  
  export interface Group {
    groupName: string
    statisticsItems: StatisticsItem[]
  }
  
  export interface StatisticsItem {
    name: string
    home: string
    away: string
    compareCode: number
    statisticsType: string
    valueType: string
    homeValue: number
    awayValue: number
    homeTotal?: number
    awayTotal?: number
  }
  
import studyGroups from './studyGroups'
import courses from './courses'

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
}
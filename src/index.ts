import studyGroups from './studyGroups'
import courses from './courses'

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
}

type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
}

type SearchEventsOptions = {
  query: (string | number);
  eventType: 'courses' | 'groups';
}

/**
 * Search through lists of courses and study groups and find matching events.
 * NOTE: courses and study groups are referred as “events” when both is being used.
 *
 * @params options - accepts both Course and StudyGroup as eventType
 */
function searchEvents(options: SearchEventsOptions) {
  let events: (Course | StudyGroup)[];
  if (options.eventType === 'courses') {
    events = courses;
  } else {
    events = studyGroups;
  }

  return events.filter((event) => {
    if (typeof options.query === 'number') {
      if (event.id === options.query) {
        return true;
      } else {
        return false;
      }
    }
    if (typeof options.query === 'string') {
      if (event.keywords.includes(options.query)) {
        return true;
      } else {
        return false;
      }
    }
  });
}


let searchResults = searchEvents({ query: 'art', eventType: 'courses' });
console.log(searchResults);
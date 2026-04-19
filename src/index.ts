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
  let events: (Course | StudyGroup)[] = options.eventType === 'courses' ? courses : studyGroups;

  return events.filter((event) => {
    switch (typeof options.query) {
      case 'number':
        return event.id === options.query ? true : false;
      case 'string':
        return event.keywords.includes(options.query) ? true : false;
    }
  });
}

let enrolledEvents: (Course | StudyGroup)[] = []

/**
 * Takes an event and adds it to a list of our enrolled events.
 * @params event - can be either a Course or a StudyGroup
 */
function enroll(event: Course | StudyGroup) {
  enrolledEvents = [...enrolledEvents, event]
}

let searchResults = searchEvents({ query: 'art', eventType: 'courses' });
searchResults.forEach((result) => {
  enroll(result)
})

console.log(enrolledEvents);
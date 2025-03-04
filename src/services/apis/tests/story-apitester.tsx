import React from 'react';

import {
  getAllStories,
  updateStory,
  addStory,
  deleteStory,
  getStoryById,
  getStoriesByAuthor,
  getStoriesByContentWarnings,
  getStoriesByFeedback,
  getFinalStories,
  getLosingStories,
  getNonSensitiveStories,
  getRunningStories,
  getSensitiveStories,
  getStoriesByHIVE,
  getStoriesByLosses,
  getStoriesByStatus,
  getStoryByTitle,
  getTopWinner,
  getWinningStories,
} from '../story-apis';

const StoryAPITester: React.FC = () => {
  React.useEffect(() => {
    // testing APIs
    console.log('Get Stories by exactly four losses', getStoriesByLosses(4));

    console.log('All Stories:', getAllStories());

    const testStoryId = '1'; // Replace with an actual story ID from STORY_SUBMISSIONS
    console.log(`Story with ID ${testStoryId}:`, getStoryById(testStoryId));

    const topWinningStoriesCount = 5;
    console.log(
      `Top ${topWinningStoriesCount} Winning Stories:`,
      getWinningStories(topWinningStoriesCount)
    );

    console.log('Top Winner:', getTopWinner());

    const testAuthor = 'Author 1'; // Replace with an actual author name from STORY_SUBMISSIONS
    console.log(
      `Stories by Author ${testAuthor}:`,
      getStoriesByAuthor(testAuthor)
    );

    const testHIVE = 'adventure'; // Replace with an actual HIVE name from STORY_SUBMISSIONS
    console.log(`Stories by HIVE ${testHIVE}:`, getStoriesByHIVE(testHIVE));

    const testStatus = 'Submitted'; // Replace with an actual status from STORY_SUBMISSIONS
    console.log(
      `Stories by Status ${testStatus}:`,
      getStoriesByStatus(testStatus)
    );

    console.log('Sensitive Stories:', getSensitiveStories());
    console.log('Non-Sensitive Stories:', getNonSensitiveStories());

    const testContentWarnings: string[] = ['Violence']; // Replace with actual content warnings from STORY_SUBMISSIONS
    console.log(
      `Stories by Content Warnings ${testContentWarnings}:`,
      getStoriesByContentWarnings(testContentWarnings)
    );

    console.log('Final Stories:', getFinalStories());
    console.log(
      'Running Stories with less than 5 wins-losses difference:',
      getRunningStories(5)
    );
  }, []);

  return <div>Story API Tester</div>;
};

export default StoryAPITester;

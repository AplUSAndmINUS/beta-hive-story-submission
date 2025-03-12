import React from 'react';

import {
  getAllStories,
  updateStory,
  addStory,
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
import { storySchema } from '../../models/battleHIVE.types';

const StoryAPITester: React.FC = () => {
  React.useEffect(() => {
    // testing GET APIs
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

    console.log('Get story by title Story 4', getStoryByTitle('Story 4'));

    console.log('Get Losing Stories:', getLosingStories(3));

    console.log(
      'Get Stories by Feedback:',
      getStoriesByFeedback(true, true, false)
    );

    // test POST APIs
    const newStory: storySchema = {
      id: '90',
      title: 'New Story',
      author: 'Author 1',
      story: 'Once upon a time...',
      HIVE: 'adventure',
      prompts: ['Prompt 1', 'Prompt 2'],
      isContentSensitive: false,
      contentWarnings: [],
      battleName: 'micro-fiction',
      wordCount: 100,
      characterCount: 500,
      status: 'Draft',
      feedback: [],
      wins: 0,
      losses: 0,
    };
    console.log('Add Story:', addStory(newStory));
    console.log('All Stories after adding:', getAllStories());

    // test PUT APIs
    const updatedStory: Partial<storySchema> = {
      id: '90',
      title: 'Updated Story',
      author: 'Author 2',
    };
    if (updatedStory.id) {
      console.log('Update Story:', updateStory(updatedStory.id, updatedStory));
    } else {
      console.error('Updated story ID is undefined');
    }
    console.log('All Stories after updating:', getAllStories());
  }, []);

  return <div>Story API Tester</div>;
};

export default StoryAPITester;

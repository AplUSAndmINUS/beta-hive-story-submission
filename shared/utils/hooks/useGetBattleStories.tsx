import React from 'react';
import {
  getCompetitionStories,
  getFinalTwoStories,
  getNonSensitiveContentStories,
  getStories,
  getTheWinner,
  // getTwoRandomStories,
  getWinners,
} from '../../services/battleHIVE-service';
import { storySchema } from '../../services/models/battleHIVE.types';
import { useAppSelector } from '../../stores/store';

const useGetBattleStories = () => {
  const [allStories, setAllStories] = React.useState<storySchema[]>([]);
  const [competitionStories, setCompetitionStories] = React.useState<
    storySchema[]
  >([]);
  const [finalStories, setFinalStories] = React.useState<storySchema[]>([]);
  const [nonSensitiveStories, setNonSensitiveStories] = React.useState<
    storySchema[]
  >([]);
  const [randomStoryOne, setRandomStoryOne] =
    React.useState<storySchema | null>(null);
  const [randomStoryTwo, setRandomStoryTwo] =
    React.useState<storySchema | null>(null);
  const [topThreeWinners, setTopThreeWinners] = React.useState<storySchema[]>(
    []
  );
  const [topWinner, setTopWinner] = React.useState<storySchema | null>(null);
  const { numOfLosses } = useAppSelector((state) => state.adminSubmission);

  React.useEffect(() => {
    // Get all stories
    const stories = getStories();
    if (stories && Array.isArray(stories)) setAllStories(stories);

    // Get remaining list of stories based on losses met or exceeded
    const losing = getCompetitionStories(numOfLosses);
    if (losing && Array.isArray(losing)) setCompetitionStories(losing);

    // Get remaining two winners based on highest amount of wins
    const final = getFinalTwoStories();
    if (final && Array.isArray(final)) setFinalStories(final);

    // Get stories that are not content sensitive
    const nonSensitive = getNonSensitiveContentStories();
    if (nonSensitive && Array.isArray(nonSensitive))
      setNonSensitiveStories(nonSensitive);

    // // Get two random stories
    // const { storyOne, storyTwo } = getTwoRandomStories();
    // if (storyOne && storyTwo && storyOne !== storyTwo) {
    //   setRandomStoryOne(storyOne);
    //   setRandomStoryTwo(storyTwo);
    // };

    // Get top three winners of the bout
    const topThree = getWinners(3) || null;
    if (topThree && Array.isArray(topThree)) setTopThreeWinners(topThree);

    // Get final winner with most wins
    const top = getTheWinner() || null;
    if (top !== null) setTopWinner(top);
  }, [allStories, numOfLosses, randomStoryOne, randomStoryTwo]);

  return {
    allStories,
    competitionStories,
    finalStories,
    nonSensitiveStories,
    randomStoryOne,
    randomStoryTwo,
    topWinner,
    topThreeWinners,
  };
};

export default useGetBattleStories;

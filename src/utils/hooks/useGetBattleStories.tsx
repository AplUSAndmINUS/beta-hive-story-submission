import React from 'react';
import {
  getCompetitionStories,
  getFinalTwoStories,
  getNonSensitiveContentStories,
  getStories,
  getTheWinner,
  getWinners,
} from '../../services/battleHIVE-service';
import { storySchema } from '../../services/models/battleHIVE.types';
import { useAppSelector } from '../../stores/store';

const useGetBattleStories = () => {
  const [allStories, setAllStories] = React.useState<storySchema[]>([]);
  const [competitionStories, setCompetitionStories] = React.useState<storySchema[]>([]);
  const [finalStories, setFinalStories] = React.useState<storySchema[]>([]);
  const [nonSensitiveStories, setNonSensitiveStories] = React.useState<storySchema[]>([]);
  const [topThreeWinners, setTopThreeWinners] = React.useState<storySchema[]>([]);
  const [topWinner, setTopWinner] = React.useState<storySchema | null>(null);
  const { numOfLosses } = useAppSelector((state) => state.adminSubmission);

  React.useEffect(() => {
    // Get all stories
    const stories = getStories();
    setAllStories(stories);

    // Get remaining list of stories based on losses met or exceeded
    const losing = getCompetitionStories(numOfLosses);
    setCompetitionStories(losing);

    // Get remaining two winners based on highest amount of wins
    const final = getFinalTwoStories();
    setFinalStories(final);

    // Get stories that are not content sensitive
    const nonSensitive = getNonSensitiveContentStories();
    setNonSensitiveStories(nonSensitive);

    // Get top three winners of the bout
    const topThree = getWinners(3);
    setTopThreeWinners(topThree);

    // Get final winner with most wins
    const top = getTheWinner() || null;
    setTopWinner(top);

  }, [numOfLosses]);

  return {
    allStories,
    competitionStories,
    finalStories,
    nonSensitiveStories,
    topWinner,
    topThreeWinners,
  };
};

export default useGetBattleStories;

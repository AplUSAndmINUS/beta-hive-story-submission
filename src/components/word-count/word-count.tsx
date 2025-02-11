import React from 'react';

interface WordCountProps {
  wordCount: number;
}

export const WordCount: React.FC<WordCountProps> = ({ wordCount }) => {
  return (
    <div className='mt-4'>
      <p>
        <span className='fw-bold'>Word Count: {wordCount}</span>
      </p>
    </div>
  );
};

export default WordCount;
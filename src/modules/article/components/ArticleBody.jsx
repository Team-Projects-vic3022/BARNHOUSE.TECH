import React from "react";

const ArticleBody = () => {
  return (
    <div className="container w-full h-[60vh] flex flex-col items-center justify-center text-center border border-gray-400 border-b-transparent">
      <h1 className="text-[30px] max-w-lg">
        No posts published in this language yet
      </h1>
      <p>Once posts are published, you’ll see them here.</p>
    </div>
  );
};

export default ArticleBody;

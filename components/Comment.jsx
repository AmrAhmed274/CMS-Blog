import React from "react";
import moment from "moment/";
import parse from "html-react-parser";

const Comment = ({ comments = [] }) => {
    return (
        <React.Fragment>
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">{`${comments.length} Comments`}</h3>
            {comments.map((comment) => (
                <div key={comment.createdAt} className="border-b border-gray-100 mb-4 pb-4">
                    <p className="mb-4">
                        <span className="font-semibold">{comment.name}</span>
                        {` on ${moment(comment.createdAt).format(
                            "MMM DD, YYYY"
                        )}`}
                    </p>
                    <p className="whitespace-pre-line text-gray-600 w-full">
                        {parse(comment.comment)}
                    </p>
                </div>
            ))}
        </React.Fragment>
    );
};

export default Comment;

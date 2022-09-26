import React, { useState, useEffect } from "react";
import { getComments } from "../services";
import { Comment } from "./";

const Comments = ({ slug }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(slug).then((res) => setComments(res));
    }, [slug]);

    return (
        <React.Fragment>
            {comments.length > 0 && (
                <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
                    <Comment comments={comments} />
                </div>
            )}
        </React.Fragment>
    );
};

export default Comments;

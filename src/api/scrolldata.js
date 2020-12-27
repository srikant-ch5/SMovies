export default (content = "Slide") => {
    const movies = [
        "#4a9eda",
        "#6872e0",
        "#9966e0",
        "#d665e0"
    ];

    return movies.map((movie,idx) => ({
        idx: idx+1,
        content: `${content} #${idx+1}`,
        movie
    }));
};


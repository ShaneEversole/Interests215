$(document).ready(() => {
    let movies = [
        { title: "Inception", genre: "Sci-Fi", year: 2010, rating: 8.8 },
        { title: "The Godfather", genre: "Crime", year: 1972, rating: 9.2 }
    ];

    // Function to render movie list
    const renderMovies = (movieArray) => {
        $(".movie-list").html(""); // Clear existing list
        movieArray.forEach((movie, index) => {
            const movieItem = $(`
                <div class="movie-item" data-index="${index}">
                    <h3>${movie.title}</h3>
                    <p>Genre: ${movie.genre}</p>
                    <p>Year: ${movie.year}</p>
                    <p>Rating: ${movie.rating}</p>
                    <button class="favorite">Add to Favorites</button>
                </div>
            `);
            $(".movie-list").append(movieItem);
        });
    };

    // Initial render
    renderMovies(movies);

    // Event to handle adding a new movie
    $("#addMovie").on("click", () => {
        const title = prompt("Enter movie title:");
        const genre = prompt("Enter movie genre:");
        const year = prompt("Enter movie year:");
        const rating = prompt("Enter movie rating:");
        if (title && genre && year && rating) {
            movies.push({ title, genre, year, rating });
            renderMovies(movies); // Re-render list
        }
    });

    // Event to handle adding to favorites
    $(".movie-list").on("click", ".favorite", function() {
        const index = $(this).closest(".movie-item").data("index");
        alert(`Added ${movies[index].title} to favorites!`);
    });
});

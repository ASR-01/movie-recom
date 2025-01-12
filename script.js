const movieRecommendations = {
  Comedy: {
    Short: {
      Happy: "Superbad - A hilarious comedy, runtime: 88 minutes.",
    },
    Medium: {
      Happy:
        "The Grand Budapest Hotel - Quirky comedy film, runtime: 99 minutes.",
    },
  },
  Action: {
    Short: {
      Excited: "Mad Max: Fury Road - High-octane action, runtime: 88 minutes.",
    },
  },
};

document.getElementById("recommendButton").addEventListener("click", () => {
  const genre = document.getElementById("genre").value;
  const duration = document.getElementById("duration").value;
  const mood = document.getElementById("mood").value;

  const recommendation =
    movieRecommendations[genre]?.[duration]?.[mood] ||
    "Sorry, we don't have a recommendation for your preferences yet.";

  document.getElementById("recommendation").textContent = recommendation;
});

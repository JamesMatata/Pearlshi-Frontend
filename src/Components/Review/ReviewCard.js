import React from "react";

const ReviewCard = ({ reviewerName, reviewText, rating }) => {
  return (
    <div
      style={{
        padding: "10px",
        flex: 1,
        height: "250px",
        maxWidth: '33%',
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        boxSizing: "border-box",
        overflow: "hidden",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, background-color 0.3s ease, color 0.1s ease",
        transform: "scale(1)", // Initial scale
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#3b82f6"; // Background on hover
        e.currentTarget.style.color = "white"; // Text color on hover
        e.currentTarget.style.transform = "scale(1.01)"; // Scale up slightly on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "white"; // Reset background
        e.currentTarget.style.color = "black"; // Reset text color
        e.currentTarget.style.transform = "scale(1)"; // Reset scale
      }}
    >
      {/* SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ marginBottom: "10px" }}
      >
        <path d="M22 1h-7a2.44 2.44 0 0 0-2.41 2l-.92 5.05a2.44 2.44 0 0 0 .53 2a2.47 2.47 0 0 0 1.88.88H17l-.25.66a3.26 3.26 0 0 0 3 4.41a1 1 0 0 0 .92-.59l2.24-5.06A1 1 0 0 0 23 10V2a1 1 0 0 0-1-1m-1 8.73l-1.83 4.13a1.3 1.3 0 0 1-.45-.4a1.23 1.23 0 0 1-.14-1.16l.38-1a1.68 1.68 0 0 0-.2-1.58A1.7 1.7 0 0 0 17.35 9h-3.29a.46.46 0 0 1-.35-.16a.5.5 0 0 1-.09-.37l.92-5A.44.44 0 0 1 15 3h6ZM9.94 13.05H7.05l.25-.66A3.26 3.26 0 0 0 4.25 8a1 1 0 0 0-.92.59l-2.24 5.06a1 1 0 0 0-.09.4v8a1 1 0 0 0 1 1h7a2.44 2.44 0 0 0 2.41-2l.92-5a2.44 2.44 0 0 0-.53-2a2.47 2.47 0 0 0-1.86-1m-.48 7.58A.44.44 0 0 1 9 21H3v-6.73l1.83-4.13a1.3 1.3 0 0 1 .45.4a1.23 1.23 0 0 1 .14 1.16l-.38 1a1.68 1.68 0 0 0 .2 1.58a1.7 1.7 0 0 0 1.41.74h3.29a.46.46 0 0 1 .35.16a.5.5 0 0 1 .09.37Z" />
      </svg>

      <h3>{reviewerName}</h3>
      <p style={{textAlign: 'center'}}>{reviewText}</p>
      <div style={{ marginTop: "5px", fontSize: "16px" }}>
        <span>{`${"⭐".repeat(rating)} (${rating}/5)`}</span>
      </div>
    </div>
  );
};

export default ReviewCard;

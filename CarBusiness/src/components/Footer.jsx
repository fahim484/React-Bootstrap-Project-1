export const Footer = () => {
  return (
    <footer className="container mx-auto footer-container d-flex gap-1 justify-content-between">
      <p style={{marginLeft: "40px"}}>
        <span className="fw-bold">Privacy Policy</span>
        <span className="fw-bold ps-4">Term of Use</span>
        <span className="ps-4 opacity-80">© 2021 All rights reserved</span>
      </p>
      <div className="d-flex gap-3 align-items-center" style={{marginRight: "40px"}}>
        <p className="d-flex gap-1">
          <img src="Img/footer-web.png" style={{ minWidth: "18px" }} alt="" />
          <span>English</span>
        </p>
        <p className="d-flex gap-1 align-items-center">
          <svg
            width="13"
            height="5"
            viewBox="0 0 13 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.44531 1.44531C5.75 1.14062 6.10156 0.988281 6.5 0.988281C6.89844 0.988281 7.25 1.14062 7.55469 1.44531C7.85938 1.75 8.01172 2.10156 8.01172 2.5C8.01172 2.89844 7.85938 3.25 7.55469 3.55469C7.25 3.85938 6.89844 4.01172 6.5 4.01172C6.10156 4.01172 5.75 3.85938 5.44531 3.55469C5.14062 3.25 4.98828 2.89844 4.98828 2.5C4.98828 2.10156 5.14062 1.75 5.44531 1.44531ZM9.94531 1.44531C10.25 1.14062 10.6016 0.988281 11 0.988281C11.3984 0.988281 11.75 1.14062 12.0547 1.44531C12.3594 1.75 12.5117 2.10156 12.5117 2.5C12.5117 2.89844 12.3594 3.25 12.0547 3.55469C11.75 3.85938 11.3984 4.01172 11 4.01172C10.6016 4.01172 10.25 3.85938 9.94531 3.55469C9.64062 3.25 9.48828 2.89844 9.48828 2.5C9.48828 2.10156 9.64062 1.75 9.94531 1.44531ZM0.945312 1.44531C1.25 1.14062 1.60156 0.988281 2 0.988281C2.39844 0.988281 2.75 1.14062 3.05469 1.44531C3.35938 1.75 3.51172 2.10156 3.51172 2.5C3.51172 2.89844 3.35938 3.25 3.05469 3.55469C2.75 3.85938 2.39844 4.01172 2 4.01172C1.60156 4.01172 1.25 3.85938 0.945312 3.55469C0.640625 3.25 0.488281 2.89844 0.488281 2.5C0.488281 2.10156 0.640625 1.75 0.945312 1.44531Z"
              fill="#9A9EA7"
            />
          </svg>
          <span>USD</span>
        </p>
      </div>
    </footer>
  );
};

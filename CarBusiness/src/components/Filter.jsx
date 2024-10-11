// Sub-Component:
const Type = () => (
  <div className="d-flex justify-content-center align-items-center">
    <label>
      <span className="fw-normal text-start filter-search-label">Type</span>

      <select className="form-select filter-search-select fw-bold fs-6">
        <option className="fw-bold fs-6">Used Car</option>
        <option className="fw-bold fs-6">New Car</option>
        <option className="fw-bold fs-6">Recondition Car</option>
        <option className="fw-bold fs-6">Scrap Car</option>
      </select>
    </label>

    <div className="vertical-line"></div>
  </div>
);

const Make = () => (
  <div className="d-flex justify-content-center align-items-center">
    <label>
      <span className="fw-normal fs-6 text-start filter-search-label">
        Make
      </span>

      <select
        className="form-select outline-none filter-search-select fw-bold fs-6"
        aria-label="Infiniti"
      >
        <option className="fw-bold fs-6" selected>
          Infiniti
        </option>
        <option className="fw-bold fs-6" value="1">
          One
        </option>
        <option className="fw-bold fs-6" value="2">
          Two
        </option>
        <option className="fw-bold fs-6" value="3">
          Three
        </option>
      </select>
    </label>

    <div className="vertical-line"></div>
  </div>
);

const Year = () => (
  <div className="d-flex justify-content-center align-items-center">
    <label>
      <span className="fw-normal fs-6 text-start filter-search-label">
        Year
      </span>

      <select className="form-select outline-none fw-bold fs-6 filter-search-select">
        <option value="" className="fw-bold fs-6">
          2000
        </option>
        <option value="" className="fw-bold fs-6">
          2005
        </option>
        <option value="" className="fw-bold fs-6">
          2010
        </option>
        <option value="" className="fw-bold fs-6">
          2024
        </option>
      </select>
    </label>

    <div className="vertical-line"></div>
  </div>
);

const Model = () => (
  <div className="d-flex justify-content-center align-items-center">
    <label>
      <span className="fw-normal fs-6 text-start filter-search-label">
        Model
      </span>

      <select className="form-select outline-none fw-bold fs-6 filter-search-select">
        <option value="" className="fw-bold fs-6">
          BMW
        </option>
        <option value="" className="fw-bold fs-6">
          BMW X7
        </option>
        <option value="" className="fw-bold fs-6">
          BMW X6
        </option>
        <option value="" className="fw-bold fs-6">
          BMW X3
        </option>
      </select>
    </label>

    <div className="vertical-line"></div>
  </div>
);

const Price = () => (
  <div className="d-flex justify-content-center align-items-center">
    <label>
      <span className="fw-normal fs-6 text-start filter-search-label">
        Price
      </span>

      <select className="form-select outline-none fw-bold fs-6 filter-search-select">
        <option value="" className="fw-bold fs-6">
          20000
        </option>
        <option value="" className="fw-bold fs-6">
          15000
        </option>
        <option value="" className="fw-bold fs-6">
          20000
        </option>
        <option value="" className="fw-bold fs-6">
          25000
        </option>
      </select>
    </label>
  </div>
);

// Main Component:
export const FilterAndSearch = () => {
  return (
    <>
      <section>
        <h1 className="text-center fw-bold fs-2 filter-search-section-title">Which vehicles you are looking for</h1>
        <div className="d-flex justify-content-center align-items-center filter-search-box gap-3">
          <Type />
          <Make />
          <Year />
          <Model />
          <Price />

          <button className="btn btn-primary search-button">
            <i className="bi bi-search"></i> Search
          </button>
        </div>
      </section>
    </>
  );
};

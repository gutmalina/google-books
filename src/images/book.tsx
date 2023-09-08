import { TEXT_PRELOADER } from "../utils/constants";

const Book = () => {
  return (
    <section style={{ position: "relative" }}>
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="200px"
        height="200px"
        x="0px"
        y="0px"
        viewBox="0 0 52 52"
        xmlSpace="preserve"
      >
        <g id="book">
          <g>
            <path
              d="M38.515,5c-3.898,0-7.868,1.148-12.516,3.495C21.457,6.206,17.516,5,13.515,5C9.338,5,5.089,6.299,0,9.001V47
			c5.109-2.609,9.502-3.938,13.817-3.938c3.533,0,7.017,0.901,10.793,2.711l1.358,0.704l1.095-0.493
			c0.002,0.002,0.004,0.002,0.006,0.004c4.22-1.983,7.944-2.981,11.631-2.98c4.248,0,8.448,1.324,13.299,3.992V9.001
			C47.025,6.372,42.809,5,38.515,5z M25,43.738c-3.931-1.822-7.509-2.675-11.183-2.675c-3.687,0-7.499,0.889-11.817,2.775V10.218
			C6.412,7.998,10.001,7,13.516,7C16.989,7,20.568,7.999,25,10.221V43.738z M50,43.747c-4.04-1.86-7.689-2.738-11.299-2.738
			c-3.676,0-7.399,0.889-11.654,2.791c-0.016-0.003-0.031-0.005-0.047-0.008V10.218C31.412,7.998,35.001,7,38.516,7
			C41.989,7,45.568,7.998,50,10.221V43.747z"
              fill="#2F4F4F"
            />
          </g>
        </g>
      </svg>
      <p
        style={{
          position: "absolute",
          top: "35%",
          left: "4%",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        {TEXT_PRELOADER}
      </p>
    </section>
  );
};

export default Book;
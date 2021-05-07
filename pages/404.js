export default function Custom404() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "35vh auto",
        textAlign: "center"
      }}
    >
      <div style={{ fontSize: "2rem", marginRight: "1rem" }}>404</div>
      <div
        style={{ width: "1px", height: "50px", backgroundColor: "#fff" }}
      ></div>
      <div style={{marginLeft: "1rem"}}>This page could not be found.</div>
    </div>
  );
}

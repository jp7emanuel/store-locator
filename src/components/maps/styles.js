const contentSize = 280;

const locationSearchStyle = () => {
  if (window.innerWidth < 920)
    return {
      position: "relative"
    }

    return {
      position: "absolute",
      zIndex: 9999,
      top: 40,
      left: 40
    }
}

export const styles = {
  locationSearch: locationSearchStyle(),
  button: {
    backgroundColor: "#234f8c",
    width: "100%",
    border: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: '1.2em'
  },
  icon: {
    border: "none"
  },
  addSize: {
    width: window.innerWidth < 920 ? "100%" : contentSize
  },
  geosuggest: {
    backgroundColor: 'white',
    border: 0
  }
}

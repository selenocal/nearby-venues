import reducer from "./venueReducer";
import * as actionTypes from "../actions/actionTypes";

describe("Venue Reducer", () => {
  const venues = [
    {
      reasons: {
        count: 0,
        items: [
          {
            summary: "This spot is popular",
            type: "general",
            reasonName: "globalInteractionReason"
          }
        ]
      },
      venue: {
        id: "51dead85498e4ff61179e1bc",
        name: "Brownies & Downies",
        location: {
          address: "Victoriapark 1",
          lat: 51.44009702025629,
          lng: 5.4722912800400065,
          labeledLatLngs: [
            {
              label: "display",
              lat: 51.44009702025629,
              lng: 5.4722912800400065
            }
          ],
          distance: 84,
          postalCode: "5611 BM",
          cc: "NL",
          city: "Eindhoven",
          state: "North-Brabant",
          country: "Netherlands",
          formattedAddress: [
            "Victoriapark 1",
            "5611 BM Eindhoven",
            "Netherlands"
          ]
        },
        categories: [
          {
            id: "4bf58dd8d48988d16d941735",
            name: "Café",
            pluralName: "Cafés",
            shortName: "Café",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/food/cafe_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        photos: { count: 0, groups: [] }
      },
      referralId: "e-0-51dead85498e4ff61179e1bc-0"
    }
  ];

  const location = "51.4401551,5.471075";

  const error = { message: "something went wrong" };

  it("FETCH_VENUES_REQUEST", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.FETCH_VENUES_REQUEST
      })
    ).toEqual({
      venues: [],
      isLoading: true,
      error: null,
      location: ""
    });
  });

  it("FETCH_VENUES_SUCCESS", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.FETCH_VENUES_SUCCESS,
        venues
      })
    ).toEqual({
      venues,
      isLoading: false,
      error: null,
      location: ""
    });
  });

  it("FETCH_VENUES_FAILURE", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.FETCH_VENUES_FAILURE,
        error
      })
    ).toEqual({
      venues: [],
      isLoading: false,
      error,
      location: ""
    });
  });

  it("GET_CLIENT_LOCATION_REQUEST", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.GET_CLIENT_LOCATION_REQUEST
      })
    ).toEqual({
      venues: [],
      isLoading: true,
      error: null,
      location: ""
    });
  });

  it("GET_CLIENT_LOCATION_SUCCESS", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.GET_CLIENT_LOCATION_SUCCESS,
        location
      })
    ).toEqual({
      venues: [],
      isLoading: false,
      error: null,
      location
    });
  });

  it("GET_CLIENT_LOCATION_FAILURE", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.GET_CLIENT_LOCATION_FAILURE,
        error
      })
    ).toEqual({
      venues: [],
      isLoading: false,
      error,
      location: ""
    });
  });
});

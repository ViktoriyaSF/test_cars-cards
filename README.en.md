# Test task

Create an application for a company that provides car rental services in Ukraine. The application consists of 3 pages:

- home page with a general description of the services provided by the company.Stylization and design at your discretion.
- a page containing a catalog of cars of various configurations, which the user can filter by brand, price per hour of car rental and the number of kilometers covered by the car during its operation (mileage).
- a page with ads that have been added by the user to favorites The appearance of the program should consist of a sidebar and a view area.

## Technical task

1. According to the layout, implement a car rental announcement card.
2. On the first page of the catalog, 8 ads should be rendered, and the rest of them - by clicking on the Load more button.
3. If you click on the button in the form of a "heart" on the ad card, it should be added to the list of favorites, and the color of the button should change.
4. When updating the page, the final result of the user's actions should be recorded. That is, if you add an ad to your favorites and refresh the page, the button still remains in the "favorite ad" state with the appropriate color.
5. If you click the heart button again, the ad should be removed from the list of favorites, and the color of the button should change to its original state.
6. If you click on the Learn more button, a modal window should open with detailed information about the car and its rental conditions.
7. The modal window should be closed by clicking on the button in the form of a "cross", by clicking on the backdrop or pressing the Esc key.
8. In the code, the mileage of the car must be written by one value (for example, 4500). In the UI - displayed with a comma (4,500).
9. The Rental car button should be implemented as a link that will allow the user to connect with the company by phone number +380730000000.

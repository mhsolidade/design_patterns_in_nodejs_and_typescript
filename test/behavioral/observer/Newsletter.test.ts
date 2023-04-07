import Newsletter from "../../../src/behavioral/observer/Newsletter";
import Subscriber from "../../../src/behavioral/observer/Subscriber";

test("subscribers should receive notifications of new news", () => {
  const subscriber1 = new Subscriber("Matheus", "mhsolidade@gmail.com");
  const newsletter = new Newsletter(
    "New Study Shows Benefits of Regular Exercise for Heart Health",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis consequat orci, quis eleifend nulla. Aliquam erat volutpat.",
    new Date(2023, 4, 7, 10, 33)
  );
  newsletter.regiter(subscriber1);
  newsletter.save();
  expect(subscriber1.newsletterNotifications[0].title).toEqual(
    "New Study Shows Benefits of Regular Exercise for Heart Health"
  );
});

import GameSavingLoader from "../gameSavingLoadr";

jest.setTimeout(15000);

test("GameSavingLoader", async () => {
  const gameSavingLoader = new GameSavingLoader();
  await gameSavingLoader.load().then((res) => {
    console.log(res);
    expect(res).toEqual({
      "id": 9,
      "created": 1546300800,
      "userInfo": {
        "id": 1,
        "name": "Hitman",
        "level": 10,
        "points": 2000
      }
    });
    
  });
});
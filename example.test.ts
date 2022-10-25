describe("Repro case", () => {
  it("should be able to find by partial text without tag", async () => {
    await browser.url(`https://github.com/`);
    await $("*=The complete developer platform").waitForExist();
  });
});

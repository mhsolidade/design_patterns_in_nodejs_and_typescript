import Channel from "../../../src/behavioral/mediator/Channel";
import Participant from "../../../src/behavioral/mediator/Participant";

test("Should create a chat among the participants.", function () {
  const participantA = new Participant("A");
  const participantB = new Participant("B");
  const participantC = new Participant("C");

  participantB.receive(participantA, "hello B");
  participantC.receive(participantA, "hello C, A on the mic");
  expect(participantB.messages[0]).toBe("A: hello B");
  expect(participantC.messages[0]).toBe("A: hello C, A on the mic");
});

test("You should create a chat in a channel.", function () {
  const participantA = new Participant("A");
  const participantB = new Participant("B");
  const participantC = new Participant("C");
  const channel = new Channel();
  channel.register(participantA);
  channel.register(participantB);
  channel.register(participantC);
  channel.send(participantA, "hello");
  expect(participantB.messages[0]).toBe("A: hello");
  expect(participantC.messages[0]).toBe("A: hello");
});

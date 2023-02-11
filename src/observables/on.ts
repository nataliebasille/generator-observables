import type { Observable } from "./observable";
import { subject } from "./subject";

export const on = <
  TElement extends HTMLElement,
  TEventType extends Parameters<TElement["addEventListener"]>[0]
>(
  element: TElement,
  eventType: TEventType,
  options?: boolean | AddEventListenerOptions
): Observable<Event> => {
  return async function* () {
    const eventStream = subject<Event>();
    const eventHandler = (event: Event) => eventStream.next(event);
    element.addEventListener(eventType, eventHandler, options);
    try {
      for await (const event of eventStream) {
        yield event;
      }
    } finally {
      element.removeEventListener(eventType, eventHandler);
    }
  };
};

async function* domEventStream(element: Element, eventType: string) {
  // Attach an event listener to the element
  element.addEventListener(eventType, function eventHandler(event) {
    // Yield the event to the generator
    yield event;
  });
}

// Usage example:
const element = document.getElementById("my-element");
for await (const event of domEventStream(element, "click")) {
  console.log(event);
}

new AsyncIterable();

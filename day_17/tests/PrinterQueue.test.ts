import { describe, it, expect, vi, afterEach } from "vitest";
import { Queue, PrinterQueue } from "../src/index";

const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

describe("PrinterQueue", () => {
  afterEach(() => {
    logSpy.mockClear();
  });

  it("should add a print job to the queue", () => {
    const printerQueue = new PrinterQueue();
    printerQueue.addPrintJob("Print report");

    expect(logSpy).toHaveBeenCalledWith(
      'Added print job: "Print report". A new scroll for the Iron Throne.',
    );
  });

  it("should process a print job from the queue", () => {
    const printerQueue = new PrinterQueue();
    printerQueue.addPrintJob("Print report");
    printerQueue.processPrintJob();

    expect(logSpy).toHaveBeenCalledWith(
      'Processing print job: "Print report". The realm will be pleased.',
    );
  });

  it("should handle processing from an empty queue", () => {
    const printerQueue = new PrinterQueue();
    printerQueue.processPrintJob();

    expect(logSpy).toHaveBeenCalledWith(
      "The queue is empty. No item to dequeue. Winter is Coming!",
    );
  });

  it("should display current print jobs in the queue", () => {
    const printerQueue = new PrinterQueue();
    printerQueue.addPrintJob("Print report");
    printerQueue.addPrintJob("Print invoice");
    printerQueue.displayJobs();

    expect(logSpy).toHaveBeenCalledWith("Current print jobs in the queue:");
    expect(logSpy).toHaveBeenCalledWith("Queue: Print report <- Print invoice");
  });

  it("should handle displaying jobs from an empty queue", () => {
    const printerQueue = new PrinterQueue();
    printerQueue.displayJobs();

    expect(logSpy).toHaveBeenCalledWith("Current print jobs in the queue:");
    expect(logSpy).toHaveBeenCalledWith("The queue is empty. Hear Me Roar");
  });
});

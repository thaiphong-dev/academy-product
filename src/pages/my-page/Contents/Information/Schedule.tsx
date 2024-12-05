/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useCallback } from "react";
import { Select, Button, DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import Image from "next/image";

const { Option } = Select;
const { RangePicker } = DatePicker;

interface Props {
  data: any;
}
const ScheduleWithNavigation = ({ data }: Props) => {
  const [viewMode, setViewMode] = useState<"month" | "week" | "">("week"); // Add a custom view mode
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
  const [selectedRange, setSelectedRange] = useState<[Dayjs, Dayjs] | null>(
    null
  ); // Store selected date range

  // Determine the start and end dates of the week or month
  // const getStartEndDates = (date: Dayjs) => {
  //   if (viewMode === "month") {
  //     const startOfMonth = date.startOf("month");
  //     const endOfMonth = date.endOf("month");
  //     return [startOfMonth, endOfMonth];
  //   } else if (viewMode === "week") {
  //     const startOfWeek = date.startOf("week");
  //     const endOfWeek = date.endOf("week");
  //     return [startOfWeek, endOfWeek];
  //   }
  //   return [null, null]; // Default for custom
  // };

  const getStartEndDates = useCallback(
    (date: Dayjs) => {
      if (viewMode === "month") {
        const startOfMonth = date.startOf("month");
        const endOfMonth = date.endOf("month");
        return [startOfMonth, endOfMonth];
      } else if (viewMode === "week") {
        const startOfWeek = date.startOf("week");
        const endOfWeek = date.endOf("week");
        return [startOfWeek, endOfWeek];
      }
      return [null, null]; // Default for custom
    },
    [viewMode]
  );

  const daysToShow = selectedRange
    ? selectedRange[1].diff(selectedRange[0], "days") + 1
    : viewMode === "month"
    ? currentDate.daysInMonth()
    : 7;

  // Generate dates based on the current date and view mode
  const dates =
    viewMode === "month"
      ? Array.from({ length: daysToShow }, (_, i) =>
          currentDate.startOf("month").add(i, "day")
        )
      : viewMode === "week"
      ? Array.from({ length: daysToShow }, (_, i) =>
          currentDate.startOf("week").add(i, "day")
        )
      : selectedRange // For custom range
      ? Array.from({ length: daysToShow }, (_, i) =>
          selectedRange[0].add(i, "day")
        )
      : [];

  const shifts = [
    "7:00 - 8:30",
    "14:30 - 16:00",
    "18:00 - 19:30",
    "19:30 - 21:00",
  ];

  // Generate table data with the current shifts
  const rowData = shifts.map((shift) => {
    const dataForShift = Array.from({ length: daysToShow }, (_, index) => {
      const dateStr = dates[index]?.format("DD/MM/YYYY"); // Format date to match data
      const match = data?.find(
        (item: any) => item?.dateStudy === dateStr && item?.courseTime === shift
      );
      return match
        ? { isPaid: match.isPaid, tick: "✓" }
        : { isPaid: false, tick: "—" }; // Return tick with isPaid status
    });
    return { shift, data: dataForShift };
  });

  // Filter out shifts that have no classes at all (only for mobile)
  const filteredRowDataForMobile = rowData.filter((row) =>
    row.data.some((item) => item.tick === "✓")
  );

  // Handle navigation
  const handlePrevious = () => {
    setCurrentDate(
      (prev) =>
        viewMode === "month"
          ? prev.subtract(1, "month").startOf("month") // Go to the start of the previous month
          : viewMode === "week"
          ? prev.subtract(1, "week").startOf("week")
          : prev // For custom, don't change the dates when navigating
    );
  };

  const handleNext = () => {
    setCurrentDate(
      (prev) =>
        viewMode === "month"
          ? prev.add(1, "month").startOf("month") // Go to the start of the next month
          : viewMode === "week"
          ? prev.add(1, "week").startOf("week")
          : prev // For custom, don't change the dates when navigating
    );
  };

  const handleDateChange = (dates: [Dayjs, Dayjs] | null) => {
    if (dates) {
      setSelectedRange(dates); // Set selected date range
      setViewMode(""); // Switch to custom view when a range is selected
    }
  };

  const handleViewModeChange = (value: "month" | "week") => {
    setViewMode(value); // Set to month or week based on the selection
    setSelectedRange(null); // Reset selected range when changing view mode
  };

  useEffect(() => {
    if (viewMode !== "") {
      const [start, end] = getStartEndDates(currentDate);
      setSelectedRange([start, end] as any); // Automatically set the selected range based on the view mode
    }
  }, [viewMode, currentDate, getStartEndDates]);

  return (
    <>
      {/* ui for PC  */}
      <div className="bg-white p-[20px] pt-[10px] drop-shadow rounded-[10px] overflow-hidden md:block hidden">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-[18px] font-semibold mb-4">Lịch học</h1>

          <div className="flex justify-start items-center space-x-4">
            {/* View Mode Select */}
            <Select
              value={viewMode as any}
              className="custom-select min-w-[150px]"
              onChange={handleViewModeChange}
            >
              <Option value="month">Theo tháng</Option>
              <Option value="week">Theo tuần</Option>
            </Select>

            {/* Date Range Picker */}
            <RangePicker
              value={selectedRange}
              onChange={(date: any) => handleDateChange(date)}
              format="DD/MM/YYYY"
              style={{
                border: "none",
                boxShadow: "none",
                width: "100%",
              }}
            />

            {/* Navigation Buttons */}
            <Button onClick={handlePrevious}>
              <div className="w-[15px] aspect-square relative">
                <Image
                  src={"/assets/images/icons/arrowLeft.svg"}
                  fill
                  sizes="auto"
                  alt="arrowleft"
                />
              </div>
            </Button>

            <Button onClick={handleNext}>
              <div className="w-[15px] aspect-square relative">
                <Image
                  src={"/assets/images/icons/arrowRight.svg"}
                  fill
                  sizes="auto"
                  alt="arrowRight"
                />
              </div>
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg max-w-[900px] ">
          <table className="min-w-max border-collapse border-spacing-0">
            <thead>
              <tr>
                <th className="sticky left-0 bg-gray-100 border-r p-4"></th>
                {dates.map((date, index) => (
                  <th
                    key={index}
                    className="bg-gray-100 text-center border-r p-4 w-[110px]"
                  >
                    <div className="text-sm text-gray-500">
                      {date.format("dddd")} {/* Day name */}
                    </div>
                    <div className="font-medium text-lg">
                      {date.format("DD")}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rowData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="sticky left-0 bg-gray-50 border-r p-4 font-medium">
                    {row.shift}
                  </td>
                  {row.data.map((item, colIndex) => (
                    <td
                      key={colIndex}
                      className="text-center border-r p-4 bg-white"
                    >
                      {item.tick === "✓" ? (
                        <span
                          className={`text-[30px] ${
                            item.isPaid ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {item.tick}
                        </span>
                      ) : (
                        item.tick
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ui for MO */}
      <div className="bg-white p-[20px] pt-[10px] drop-shadow rounded-[10px] overflow-hidden md:hidden">
        <div className="flex flex-col items-end justify-between space-y-[10px] mb-4">
          <div className="flex flex-wrap justify-start items-center">
            {/* View Mode Select */}
            <Select
              value={viewMode as any}
              className="custom-select min-w-full"
              onChange={handleViewModeChange}
              size="small"
            >
              <Option value="month">Theo tháng</Option>
              <Option value="week">Theo tuần</Option>
            </Select>

            {/* Date Range Picker */}
            <RangePicker
              value={selectedRange}
              onChange={(date: any) => handleDateChange(date)}
              format="DD/MM/YYYY"
              style={{
                border: "none",
                boxShadow: "none",
              }}
              className="w-full"
              size="small"
            />
          </div>
          <div className="space-x-[20px]">
            {/* Navigation Buttons */}
            <Button
              onClick={handlePrevious}
              size="small"
              icon={
                <Image
                  src={"/assets/images/icons/arrowLeft.svg"}
                  width={12}
                  height={12}
                  alt="arrowleft"
                />
              }
            />
            <Button
              onClick={handleNext}
              size="small"
              icon={
                <Image
                  src={"/assets/images/icons/arrowRight.svg"}
                  width={12}
                  height={12}
                  alt="arrowRight"
                />
              }
            />
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg max-w-full">
          <div className="grid grid-cols-1 gap-4">
            {filteredRowDataForMobile.map((row, rowIndex) => (
              <div key={rowIndex} className="bg-white p-4 rounded-lg shadow-md">
                <div className="font-medium text-sm text-gray-500 mb-2">
                  {row.shift}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {row.data.map((item, colIndex) => (
                    <div key={colIndex} className="text-center">
                      {item.tick === "✓" ? (
                        <span
                          className={`text-[18px] ${
                            item.isPaid ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {item.tick}
                        </span>
                      ) : (
                        item.tick
                      )}
                      <div className="text-xs text-gray-400">
                        {dates[colIndex]?.format("DD/MM")}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleWithNavigation;

import * as React from "react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/style.css"

/**
 * Custom Calendar component built on react-day-picker v9.
 * Styled to match the T-Goda design system with #005CBD blue accents.
 */
function Calendar({ className, ...props }) {
  return (
    <div className={className}>
      <style>{`
        /* ── Base Reset ── */
        .tgoda-calendar {
          --rdp-accent-color: #005CBD;
          --rdp-accent-background-color: #005CBD;
          --rdp-day-height: 36px;
          --rdp-day-width: 36px;
          --rdp-selected-font: inherit;
          --rdp-range_start-color: white;
          --rdp-range_end-color: white;
          --rdp-range_middle-color: #005CBD;
          --rdp-range_start-background: #005CBD;
          --rdp-range_end-background: #005CBD;
          --rdp-range_middle-background: rgba(0, 92, 189, 0.15);
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          padding: 12px;
        }

        /* ── Caption (month/year header area) ── */
        .tgoda-calendar .rdp-month_caption {
          font-weight: 700;
          font-size: 15px;
          padding: 0 4px 8px 4px;
        }

        /* ── Dropdowns for month & year ── */
        .tgoda-calendar .rdp-dropdowns {
          display: flex;
          gap: 6px;
          align-items: center;
        }
        .tgoda-calendar .rdp-dropdown {
          appearance: none;
          -webkit-appearance: none;
          background: transparent;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 4px 24px 4px 8px;
          font-size: 14px;
          font-weight: 600;
          font-family: 'Plus Jakarta Sans', sans-serif;
          cursor: pointer;
          transition: all 0.2s ease;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23727784' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 6px center;
        }
        .tgoda-calendar .rdp-dropdown:hover {
          border-color: #005CBD;
          background-color: rgba(0, 92, 189, 0.05);
        }
        .tgoda-calendar .rdp-dropdown:focus {
          outline: none;
          border-color: #005CBD;
          box-shadow: 0 0 0 3px rgba(0, 92, 189, 0.15);
        }

        /* ── Navigation chevrons ── */
        .tgoda-calendar .rdp-button_previous,
        .tgoda-calendar .rdp-button_next {
          width: 32px;
          height: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          border: none;
          background: transparent;
          cursor: pointer;
          color: #727784;
          transition: all 0.2s ease;
        }
        .tgoda-calendar .rdp-button_previous:hover,
        .tgoda-calendar .rdp-button_next:hover {
          background-color: rgba(0, 92, 189, 0.1);
          color: #005CBD;
          transform: scale(1.15);
        }
        .tgoda-calendar .rdp-button_previous:active,
        .tgoda-calendar .rdp-button_next:active {
          transform: scale(0.95);
        }
        .tgoda-calendar .rdp-chevron {
          fill: currentColor;
        }

        /* ── Weekday headers ── */
        .tgoda-calendar .rdp-weekday {
          font-size: 12px;
          font-weight: 600;
          color: #727784;
          text-transform: uppercase;
          width: 36px;
          height: 28px;
          transition: color 0.2s ease;
        }
        .tgoda-calendar .rdp-weekday:hover {
          color: #005CBD;
        }

        /* ── Day cells ── */
        .tgoda-calendar .rdp-day {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.15s ease;
        }
        .tgoda-calendar .rdp-day_button {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: none;
          background: transparent;
          cursor: pointer;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.15s ease;
        }
        .tgoda-calendar .rdp-day_button:hover {
          background-color: #005CBD !important;
          color: white !important;
          transform: scale(1.1);
        }

        /* ── Today highlight ── */
        .tgoda-calendar .rdp-today .rdp-day_button {
          font-weight: 800;
          color: #005CBD;
          position: relative;
        }
        .tgoda-calendar .rdp-today .rdp-day_button::after {
          content: '';
          position: absolute;
          bottom: 3px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #005CBD;
        }

        /* ── Selected days (range start/end) ── */
        .tgoda-calendar .rdp-selected .rdp-day_button {
          background-color: #005CBD;
          color: white;
          font-weight: 700;
        }
        .tgoda-calendar .rdp-selected .rdp-day_button:hover {
          background-color: #004a9e !important;
        }

        /* ── Range middle ── */
        .tgoda-calendar .rdp-range_middle .rdp-day_button {
          background-color: rgba(0, 92, 189, 0.12);
          color: #005CBD;
          font-weight: 600;
          border-radius: 0;
        }
        .tgoda-calendar .rdp-range_middle .rdp-day_button:hover {
          background-color: #005CBD !important;
          color: white !important;
          border-radius: 8px;
        }

        /* ── Range start/end rounding ── */
        .tgoda-calendar .rdp-range_start .rdp-day_button {
          border-radius: 8px 0 0 8px;
        }
        .tgoda-calendar .rdp-range_end .rdp-day_button {
          border-radius: 0 8px 8px 0;
        }
        .tgoda-calendar .rdp-range_start.rdp-range_end .rdp-day_button {
          border-radius: 8px;
        }

        /* ── Outside days (grey) ── */
        .tgoda-calendar .rdp-outside .rdp-day_button {
          opacity: 0.35;
        }

        /* ── Disabled ── */
        .tgoda-calendar .rdp-disabled .rdp-day_button {
          opacity: 0.25;
          cursor: not-allowed;
        }
        .tgoda-calendar .rdp-disabled .rdp-day_button:hover {
          background-color: transparent !important;
          color: inherit !important;
          transform: none;
        }
      `}</style>
      <DayPicker
        className="tgoda-calendar"
        showOutsideDays={true}
        {...props}
      />
    </div>
  )
}

Calendar.displayName = "Calendar"

export { Calendar }
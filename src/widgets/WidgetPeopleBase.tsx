// src/widgets/WidgetPeopleBase.tsx
import React from "react";
import type { PeopleBase, WidgetId } from "./types";
import "./styles.css";

interface PeopleBaseProps {
  templateId?: WidgetId | string;
  data?: any;
  theme?: string;
}

const findDomain = (env: string = "") => {
  return env?.toLowerCase() === "dev"
    ? "https://next-dev.listkit.io"
    : env?.toLowerCase() === "staging"
    ? "https://next-beta.listkit.io"
    : "https://next.listkit.io";
};

export const PeopleBaseWidget: React.FC<PeopleBaseProps> = ({
  data = null,
  theme = "",
}) => {
  console.log("theme in PeopleBaseWidget", theme);
  const link = `${findDomain(
    data?.env
  )}/signup?plan=universalAccessFree&prompt=${data.title || ""}&tokenAI=${
    data.token
  }&filterAI=${encodeURIComponent(
    JSON.stringify(
      data.search_type === "vector" ? "" : data.applied_filters || ""
    )
  )}&pageAI=${data.page || ""}&templateId=${data.templateId || ""}&searchType=${
    data.search_type || ""
  }&titleAI=${data.title || ""}`;
  /*const link = `http://app-dev.listkit.io/login?tokenAI=${
    data.token
  }&filterAI=${encodeURIComponent(
    JSON.stringify(data.applied_filters)
  )}&pageAI=${data.page}`;*/
  /*const auth0Url = data?.login_link || "";
  const innerUrl =
    `http://app-dev.listkit.io/login?tokenAI=${encodeURIComponent(
      data.token
    )}` +
    `&filterAI=${encodeURIComponent(JSON.stringify(data.applied_filters))}` +
    `&pageAI=${encodeURIComponent(data.page)}`;

  const link = `${auth0Url}&login_link=${encodeURIComponent(innerUrl)}`;*/

  const templateId = data.templateId || "";
  console.log("widget people", templateId);

  const checkValueTextUppercase = (value: string) => {
    const m = ["cxo", "vp", "ceo", "cmo", "pm", "cto", "coo", "cro"];
    if (value && value?.trim()) {
      const str = value.trim().toLowerCase();
      m.forEach((item) => {
        if (str.includes(item)) {
          const regex = new RegExp(`\\b${item}\\b`, "gi");
          value = value.replace(regex, item.toUpperCase());
        }
      });
    }
    return value;
  };

  const extractBackendErrorMessage = (raw: unknown): string => {
    const text = typeof raw === "string" ? raw : String(raw ?? "");

    let message = text;

    try {
      const parsed = JSON.parse(text);

      if (Array.isArray(parsed) && parsed.length > 0) {
        message = String(parsed[0]);
      } else if (typeof parsed === "string") {
        message = parsed;
      }
    } catch {
      message = "Request topic is not supported.";
    }

    return message;
  };

  return (
    <>
      <div className={`container ${theme === "dark" ? "container--dark" : ""}`}>
        <div className="title-block">
          <span className="title-block__text">
            {checkValueTextUppercase(data?.title || "")}
          </span>
          <a
            href={link}
            target="_blank"
            className="title-block__button"
            type="button"
          >
            Open{" "}
            {data?.results?.length > 0
              ? `${
                  data?.result_count
                    ? data?.result_count?.toLocaleString("en-US")
                    : ""
                } results`
              : " web"}
          </a>
        </div>

        {data?.error || data?.text ? (
          <div className="no-data error-text">
            {extractBackendErrorMessage(data?.text)}
          </div>
        ) : (
          <div className="overflow">
            <table className="table">
              <thead>
                <tr>
                  {templateId === "people-base" && (
                    <th className="table__th">
                      <div className="table__flex">
                        <svg
                          className="min-w-14"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="6.99984"
                            cy="3.4974"
                            r="2.33333"
                            stroke="#0D2A4C"
                            strokeWidth="0.875"
                          />
                          <ellipse
                            cx="6.99984"
                            cy="9.91927"
                            rx="4.08333"
                            ry="2.33333"
                            stroke="#0D2A4C"
                            strokeWidth="0.875"
                          />
                        </svg>
                        Full name
                      </div>
                    </th>
                  )}
                  <th className="table__th">
                    <div className="table__flex">
                      <svg
                        className="min-w-14"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.8332 12.8359L1.1665 12.8359"
                          stroke="#0D2A4C"
                          strokeWidth="0.875"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9.91683 12.8307V3.4974C9.91683 2.39745 9.91683 1.84748 9.57512 1.50577C9.23341 1.16406 8.68344 1.16406 7.5835 1.16406H6.41683C5.31689 1.16406 4.76691 1.16406 4.4252 1.50577C4.0835 1.84748 4.0835 2.39745 4.0835 3.4974V12.8307"
                          stroke="#0D2A4C"
                          strokeWidth="0.875"
                        />
                        <path
                          d="M12.2502 12.8307V6.70573C12.2502 5.88646 12.2502 5.47682 12.0535 5.18256C11.9684 5.05518 11.859 4.9458 11.7317 4.86068C11.4374 4.66406 11.0278 4.66406 10.2085 4.66406"
                          stroke="#0D2A4C"
                          strokeWidth="0.875"
                        />
                        <path
                          d="M1.75 12.8307V6.70573C1.75 5.88646 1.75 5.47682 1.94662 5.18256C2.03174 5.05518 2.14111 4.9458 2.2685 4.86068C2.56276 4.66406 2.9724 4.66406 3.79167 4.66406"
                          stroke="#0D2A4C"
                          strokeWidth="0.875"
                        />
                        <path
                          d="M7 12.8359V11.0859"
                          stroke="#0D2A4C"
                          strokeWidth="0.875"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5.8335 2.91406H8.16683"
                          stroke="#0D2A4C"
                          strokeWidth="0.875"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5.8335 4.66406H8.16683"
                          stroke="#0D2A4C"
                          strokeWidth="0.875"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5.8335 6.41406H8.16683"
                          stroke="#0D2A4C"
                          strokeWidth="0.875"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5.8335 8.16406H8.16683"
                          stroke="#0D2A4C"
                          strokeWidth="0.875"
                          strokeLinecap="round"
                        />
                      </svg>
                      Company
                    </div>
                  </th>
                  {templateId === "companies-base" && (
                    <th className="table__th">
                      <div className="table__flex">
                        <svg
                          className="min-w-14"
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 6.66927C2 4.15511 2 2.89803 2.78105 2.11699C3.5621 1.33594 4.81918 1.33594 7.33333 1.33594H8.66667C11.1808 1.33594 12.4379 1.33594 13.219 2.11699C14 2.89803 14 4.15511 14 6.66927V9.33594C14 11.8501 14 13.1072 13.219 13.8882C12.4379 14.6693 11.1808 14.6693 8.66667 14.6693H7.33333C4.81918 14.6693 3.5621 14.6693 2.78105 13.8882C2 13.1072 2 11.8501 2 9.33594V6.66927Z"
                            stroke="#0D2A4C"
                            strokeWidth="0.875"
                          />
                          <path
                            d="M5.33325 8H10.6666"
                            stroke="#0D2A4C"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                          />
                          <path
                            d="M5.33325 5.33594H10.6666"
                            stroke="#0D2A4C"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                          />
                          <path
                            d="M5.33325 10.6641H8.66659"
                            stroke="#0D2A4C"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                          />
                        </svg>
                        URL
                      </div>
                    </th>
                  )}
                  {templateId === "companies-base" && (
                    <th className="table__th">
                      <div className="table__flex">
                        <svg
                          className="min-w-14"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.16663 3.5H5.83329C5.04237 3.5 4.39362 3.5 3.8553 3.53176C2.89632 3.58834 2.28775 3.74571 1.85004 4.18342C1.16663 4.86684 1.16663 5.96678 1.16663 8.16667C1.16663 10.3666 1.16663 11.4665 1.85004 12.1499C2.53346 12.8333 3.6334 12.8333 5.83329 12.8333H8.16663C10.3665 12.8333 11.4665 12.8333 12.1499 12.1499C12.8333 11.4665 12.8333 10.3666 12.8333 8.16667C12.8333 5.96678 12.8333 4.86684 12.1499 4.18342C11.7122 3.74571 11.1036 3.58834 10.1446 3.53176C9.6063 3.5 8.95755 3.5 8.16663 3.5Z"
                            stroke="#0D2A4C"
                            strokeWidth="0.875"
                          />
                          <path
                            d="M3.85547 3.53176C4.33581 3.51959 4.75956 3.18203 4.92301 2.73019C4.92804 2.71629 4.93319 2.70083 4.9435 2.6699L4.95847 2.625C4.98307 2.55117 4.99538 2.51425 5.00855 2.4815C5.17666 2.06332 5.57061 1.77938 6.02049 1.75213C6.05572 1.75 6.09464 1.75 6.17246 1.75H7.8278C7.90563 1.75 7.94454 1.75 7.97977 1.75213C8.42966 1.77938 8.8236 2.06332 8.99172 2.4815C9.00488 2.51425 9.01719 2.55117 9.0418 2.625L9.05677 2.6699C9.06706 2.70078 9.07223 2.7163 9.07726 2.73019C9.2407 3.18203 9.66445 3.51959 10.1448 3.53176"
                            stroke="#0D2A4C"
                            strokeWidth="0.875"
                          />
                          <path
                            d="M12.636 5.08594C10.8803 6.22717 10.0024 6.79778 9.07693 7.08532C7.72421 7.5056 6.2758 7.5056 4.92308 7.08532C3.99762 6.79778 3.11975 6.22717 1.36401 5.08594"
                            stroke="#0D2A4C"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                          />
                          <path
                            d="M4.66663 6.41797V7.58464"
                            stroke="#0D2A4C"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                          />
                          <path
                            d="M9.33337 6.41797V7.58464"
                            stroke="#0D2A4C"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                          />
                        </svg>
                        Employees
                      </div>
                    </th>
                  )}
                  {templateId === "people-base" && (
                    <th className="table__th">
                      <div className="table__flex">
                        <svg
                          className="min-w-14"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.1665 3.5H5.83317C5.04224 3.5 4.3935 3.5 3.85517 3.53176C2.8962 3.58834 2.28763 3.74571 1.84992 4.18342C1.1665 4.86684 1.1665 5.96678 1.1665 8.16667C1.1665 10.3666 1.1665 11.4665 1.84992 12.1499C2.53334 12.8333 3.63328 12.8333 5.83317 12.8333H8.1665C10.3664 12.8333 11.4663 12.8333 12.1498 12.1499C12.8332 11.4665 12.8332 10.3666 12.8332 8.16667C12.8332 5.96678 12.8332 4.86684 12.1498 4.18342C11.712 3.74571 11.1035 3.58834 10.1445 3.53176C9.60618 3.5 8.95743 3.5 8.1665 3.5Z"
                            stroke="#0D2A4C"
                            strokeWidth="0.875"
                          />
                          <path
                            d="M3.85547 3.53176C4.33581 3.51959 4.75956 3.18203 4.92301 2.73019C4.92804 2.71629 4.93319 2.70083 4.9435 2.6699L4.95847 2.625C4.98307 2.55117 4.99538 2.51425 5.00855 2.4815C5.17666 2.06332 5.57061 1.77938 6.02049 1.75213C6.05572 1.75 6.09464 1.75 6.17246 1.75H7.8278C7.90563 1.75 7.94454 1.75 7.97977 1.75213C8.42966 1.77938 8.8236 2.06332 8.99172 2.4815C9.00488 2.51425 9.01719 2.55117 9.0418 2.625L9.05677 2.6699C9.06706 2.70078 9.07223 2.7163 9.07726 2.73019C9.2407 3.18203 9.66445 3.51959 10.1448 3.53176"
                            stroke="#0D2A4C"
                            strokeWidth="0.875"
                          />
                          <path
                            d="M12.6362 5.08594C10.8805 6.22717 10.0026 6.79778 9.07718 7.08532C7.72445 7.5056 6.27605 7.5056 4.92332 7.08532C3.99787 6.79778 3.12 6.22717 1.36426 5.08594"
                            stroke="#0D2A4C"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                          />
                          <path
                            d="M4.6665 6.41406V7.58073"
                            stroke="#0D2A4C"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                          />
                          <path
                            d="M9.3335 6.41406V7.58073"
                            stroke="#0D2A4C"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                          />
                        </svg>
                        Job Title
                      </div>
                    </th>
                  )}
                </tr>
              </thead>

              <tbody>
                {data?.results.map((item: any, idx: number) => (
                  <tr
                    className="table__tr"
                    key={item.id || item.companyId || idx}
                  >
                    {templateId === "people-base" && (
                      <td className="table__td">
                        <div className="table__flex capitalize">
                          {item.fullName || "N/A"}
                        </div>
                      </td>
                    )}
                    <td className="table__td">
                      <div className="table__flex capitalize">
                        <div
                          className="table__img-circle"
                          style={{
                            background: `linear-gradient(to right, lab(65.0361% -1.42065 -56.9802), lab(52.0183% 66.11 -78.2316))`,
                          }}
                        >
                          {item.companyLogo && (
                            <img
                              width={16}
                              height={16}
                              src={item.companyLogo}
                              alt={item.companyName}
                            />
                          )}
                        </div>
                        <div>
                          {item.companyName || "N/A"}{" "}
                          <div className="table__line"></div>
                        </div>
                      </div>
                    </td>
                    {templateId === "companies-base" && (
                      <td className="table__td">
                        <div className="table__flex">
                          {item.companyDomain || item.companyWebsite}
                        </div>
                      </td>
                    )}
                    {templateId === "companies-base" && (
                      <td className="table__td">
                        <div className="table__flex">
                          {item.employeesRange && (
                            <span className="table__badge">
                              {item.employeesRange}
                            </span>
                          )}
                        </div>
                      </td>
                    )}
                    {templateId === "people-base" && (
                      <td className="table__td">
                        <div className="table__flex capitalize">
                          {checkValueTextUppercase(item.jobTitle)}
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
            {data?.results.length === 0 && (
              <div className="no-data">
                No results here - try the full search in the app
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

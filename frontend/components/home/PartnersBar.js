export default function PartnersBar() {
  const row1Companies = [
    {
      name: "Microsoft",
      logo: "/images/companies/microsoft.svg",
      width: 140,
    },
    {
      name: "Amazon AWS",
      logo: "/images/companies/aws.svg",
      width: 60,
    },
    {
      name: "Google",
      logo: "/images/companies/google.svg",
      width: 100,
    },
    {
      name: "Razorpay",
      logo: "/images/companies/razorpay.svg",
      width: 130,
    },
    {
      name: "Zoho",
      logo: "/images/companies/zoho.svg",
      width: 110,
    },
    {
      name: "Flipkart",
      logo: "/images/companies/flipkart.svg",
      width: 125,
    },
    {
      name: "Swiggy",
      logo: "/images/companies/swiggy.svg",
      width: 115,
    },
    {
      name: "Freshworks",
      logo: "/images/companies/freshworks.svg",
      width: 140,
    },
    {
      name: "TCS",
      logo: "/images/companies/tcs.svg",
      width: 95,
    },
    {
      name: "Infosys",
      logo: "/images/companies/infosys.svg",
      width: 110,
    },
  ];

  const row2Companies = [
    {
      name: "Wipro",
      logo: "/images/companies/wipro.svg",
      width: 95,
    },
    {
      name: "HCLTech",
      logo: "/images/companies/hcltech.svg",
      width: 115,
    },
    {
      name: "Accenture",
      logo: "/images/companies/accenture.svg",
      width: 135,
    },
    {
      name: "IBM",
      logo: "/images/companies/ibm.svg",
      width: 85,
    },
    {
      name: "Adobe",
      logo: "/images/companies/adobe.svg",
      width: 115,
    },
    {
      name: "Salesforce",
      logo: "/images/companies/salesforce.svg",
      width: 135,
    },
    {
      name: "Oracle",
      logo: "/images/companies/oracle.svg",
      width: 115,
    },
    {
      name: "Walmart",
      logo: "/images/companies/walmart.svg",
      width: 125,
    },
    {
      name: "PhonePe",
      logo: "/images/companies/phonepe.svg",
      width: 120,
    },
    {
      name: "Paytm",
      logo: "/images/companies/paytm.svg",
      width: 95,
    },
  ];

  // Duplicate sequences internally for seamless continuous infinite looping
  const row1Sequence = [...row1Companies, ...row1Companies];
  const row2Sequence = [...row2Companies, ...row2Companies];

  return (
    <section
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        padding: "40px 0 44px 0",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="Mentors, Alumni & Hiring Partners"
    >
      <style>{`
        /* Row 1: LEFT → RIGHT animation */
        @keyframes marqueeLeftToRight {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        /* Row 2: RIGHT → LEFT animation */
        @keyframes marqueeRightToLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .partners-marquee-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
        }

        .partners-marquee-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
          display: flex;
          mask-image: linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%);
        }

        .partners-marquee-track-ltr {
          display: flex;
          width: max-content;
          animation: marqueeLeftToRight 42s linear infinite;
          will-change: transform;
        }

        .partners-marquee-track-rtl {
          display: flex;
          width: max-content;
          animation: marqueeRightToLeft 44s linear infinite;
          will-change: transform;
        }

        .partners-marquee-group {
          display: flex;
          align-items: center;
          gap: 20px;
          padding-right: 20px;
          flex-shrink: 0;
        }

        .partner-logo-item {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 24px;
          border-radius: 999px;
          background: #FAF8F5;
          border: 1px solid var(--border-subtle);
          flex-shrink: 0;
          white-space: nowrap;
          height: 56px;
          box-sizing: border-box;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .partner-logo-item:hover {
          border-color: rgba(201, 151, 56, 0.45);
          box-shadow: 0 4px 14px rgba(11, 19, 32, 0.06);
        }

        .partner-logo-img {
          height: 34px;
          width: auto;
          max-width: 140px;
          object-fit: contain;
          display: block;
        }

        @media (max-width: 1024px) {
          .partners-marquee-container {
            gap: 14px;
          }
          .partners-marquee-group {
            gap: 16px;
            padding-right: 16px;
          }
          .partner-logo-item {
            padding: 8px 18px;
            height: 48px;
          }
          .partner-logo-img {
            height: 28px;
            max-width: 120px;
          }
        }

        @media (max-width: 768px) {
          .partners-marquee-container {
            gap: 12px;
          }
          .partners-marquee-group {
            gap: 12px;
            padding-right: 12px;
          }
          .partner-logo-item {
            padding: 6px 14px;
            height: 42px;
          }
          .partner-logo-img {
            height: 24px;
            max-width: 100px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .partners-marquee-track-ltr,
          .partners-marquee-track-rtl {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* Heading preserved exactly as requested */}
      <div className="container">
        <div
          style={{
            textAlign: "center",
            marginBottom: "26px",
          }}
        >
          <span
            style={{
              fontSize: "0.74rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--vil-gold-dim)",
            }}
          >
            Mentors, Alumni & Hiring Partners From Leading Tech Teams
          </span>
        </div>
      </div>

      {/* Two-Row Animated Logo Tracks */}
      <div className="partners-marquee-container">
        {/* ROW 1: LEFT → RIGHT */}
        <div className="partners-marquee-wrapper">
          <div className="partners-marquee-track-ltr">
            {/* Primary Set */}
            <div className="partners-marquee-group">
              {row1Sequence.map((comp, idx) => (
                <div key={`row1-p-${comp.name}-${idx}`} className="partner-logo-item">
                  <img
                    src={comp.logo}
                    alt={`${comp.name} logo`}
                    className="partner-logo-img"
                    loading="eager"
                  />
                </div>
              ))}
            </div>

            {/* Seamless Loop Duplicate Set */}
            <div className="partners-marquee-group" aria-hidden="true">
              {row1Sequence.map((comp, idx) => (
                <div key={`row1-d-${comp.name}-${idx}`} className="partner-logo-item">
                  <img
                    src={comp.logo}
                    alt=""
                    className="partner-logo-img"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 2: RIGHT → LEFT */}
        <div className="partners-marquee-wrapper">
          <div className="partners-marquee-track-rtl">
            {/* Primary Set */}
            <div className="partners-marquee-group">
              {row2Sequence.map((comp, idx) => (
                <div key={`row2-p-${comp.name}-${idx}`} className="partner-logo-item">
                  <img
                    src={comp.logo}
                    alt={`${comp.name} logo`}
                    className="partner-logo-img"
                    loading="eager"
                  />
                </div>
              ))}
            </div>

            {/* Seamless Loop Duplicate Set */}
            <div className="partners-marquee-group" aria-hidden="true">
              {row2Sequence.map((comp, idx) => (
                <div key={`row2-d-${comp.name}-${idx}`} className="partner-logo-item">
                  <img
                    src={comp.logo}
                    alt=""
                    className="partner-logo-img"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

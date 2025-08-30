import svgPaths from "./svg-ax7gqho0hb";

function Clock() {
  return (
    <div className="absolute left-[25px] size-[25px] top-[318px]" data-name="Clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g clipPath="url(#clip0_2_200)" id="Clock">
          <path d={svgPaths.p830f700} id="Icon" stroke="var(--stroke-0, #D9D9D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
        <defs>
          <clipPath id="clip0_2_200">
            <rect fill="white" height="25" width="25" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-0.5 top-[250px]">
      <div className="absolute bg-[rgba(22,22,22,0.75)] h-[110px] left-0.5 rounded-[22.5px] top-[250px] w-[156px]" />
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[29px] leading-[0] left-[60px] not-italic text-[#ffffff] text-[14px] top-[278px] w-[85px]">
        <p className="leading-[normal]">Chicago, IL</p>
      </div>
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[29px] leading-[0] left-[60px] not-italic text-[#ffffff] text-[14px] top-[323px] w-[63px]">
        <p className="leading-[normal]">3:00 PM</p>
      </div>
      <div className="absolute left-6 size-[26px] top-[273px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <circle cx="13" cy="13" fill="var(--fill-0, #008BE8)" id="Ellipse 7" r="13" />
        </svg>
      </div>
      <div className="absolute left-[30px] size-3.5 top-[279px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, white)" id="Ellipse 8" r="7" />
        </svg>
      </div>
      <Clock />
    </div>
  );
}

function MarkEmailUnread() {
  return (
    <div className="absolute left-[29.19px] size-[24.619px] top-[82.84px]" data-name="mark_email_unread">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="mark_email_unread">
          <path d={svgPaths.p6008480} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function MarkEmailUnread1() {
  return (
    <div className="absolute left-[29.19px] size-[24.619px] top-[117.75px]" data-name="mark_email_unread">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="mark_email_unread">
          <path d={svgPaths.p6008480} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function MarkEmailUnread2() {
  return (
    <div className="absolute left-[29.19px] size-[24.619px] top-[154.6px]" data-name="mark_email_unread">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="mark_email_unread">
          <path d={svgPaths.p6008480} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function MarkEmailUnread3() {
  return (
    <div className="absolute left-[29.19px] size-[24.619px] top-[192.42px]" data-name="mark_email_unread">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="mark_email_unread">
          <path d={svgPaths.p6008480} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[rgba(22,22,22,0.75)] h-[242px] left-0 rounded-[22.5px] top-0 w-[156px]" />
      <div className="absolute font-['IBM_Plex_Sans:Bold',_sans-serif] h-[28.122px] leading-[0] left-[29px] not-italic text-[#ffffff] text-[24px] top-[27.42px] w-[104px]">
        <p className="leading-[normal]">Contact</p>
      </div>
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[19.395px] leading-[0] left-[71px] not-italic text-[#ffffff] text-[14px] top-[84.97px] w-[86px]">
        <p className="leading-[normal]">Email</p>
      </div>
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[19.395px] leading-[0] left-[71px] not-italic text-[#ffffff] text-[14px] top-[157.7px] w-[86px]">
        <p className="leading-[normal]">Email</p>
      </div>
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[19.395px] leading-[0] left-[71px] not-italic text-[#ffffff] text-[14px] top-[119.88px] w-[111px]">
        <p className="leading-[normal]">LinkedIn</p>
      </div>
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[19.395px] leading-[0] left-[71px] not-italic text-[#ffffff] text-[14px] top-[196.49px] w-[111px]">
        <p className="leading-[normal]">LinkedIn</p>
      </div>
      <MarkEmailUnread />
      <MarkEmailUnread1 />
      <MarkEmailUnread2 />
      <MarkEmailUnread3 />
    </div>
  );
}

export default function Group8() {
  return (
    <div className="relative size-full">
      <Group7 />
      <Group6 />
    </div>
  );
}
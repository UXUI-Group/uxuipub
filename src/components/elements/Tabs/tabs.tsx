'use client';

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { TabsProps, TabItem } from './tabs.type';
import './tabs_styles/tabs.scss';

import { SwapIcon, QuestionMark, DateIcon, PassengerIcon, ClassIcon } from '@/components/svgs';

// 팝오버 타입 정의
type PopoverType = 'multi' | 'multi-type' | 'multi-form' | 'skyteam';

// 팝오버 상태 인터페이스
interface PopoverState {
  isOpen: boolean;
  position: { left: number; top: number };
  edgeLeft: string;
  isReady: boolean;
}

// 팝오버 훅
const usePopover = () => {
  const [state, setState] = useState<PopoverState>({
    isOpen: false,
    position: { left: 0, top: 0 },
    edgeLeft: '50%',
    isReady: false,
  });

  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const calculatePosition = useCallback(() => {
    if (triggerRef.current && popoverRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const popoverRect = popoverRef.current.getBoundingClientRect();
      const triggerCenter = triggerRect.left + triggerRect.width / 2;
      const left = triggerCenter - popoverRect.width / 2;
      const top = triggerRect.bottom + 8;

      setState(prev => ({
        ...prev,
        position: { left, top },
        edgeLeft: `${triggerCenter - left}px`,
      }));
    }
  }, []);

  const toggle = () => {
    if (!state.isOpen) {
      setState(prev => ({ ...prev, isOpen: true, isReady: false }));
      setTimeout(() => {
        calculatePosition();
        setState(prev => ({ ...prev, isReady: true }));
      }, 0);
    } else {
      setState(prev => ({ ...prev, isOpen: false, isReady: false }));
    }
  };

  const close = () => {
    setState(prev => ({ ...prev, isOpen: false, isReady: false }));
  };

  useEffect(() => {
    if (state.isOpen) {
      calculatePosition();
    }
  }, [state.isOpen, calculatePosition]);

  useEffect(() => {
    const handleResize = () => {
      if (state.isOpen) {
        calculatePosition();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [state.isOpen, calculatePosition]);

  return {
    state,
    triggerRef,
    popoverRef,
    toggle,
    close,
  };
};

// 통합 팝오버 훅 (기존 통합 시스템용)
const useIntegratedPopover = () => {
  const [openPopover, setOpenPopover] = useState<PopoverType | null>(null);
  const [popoverPositions, setPopoverPositions] = useState<{
    [key in PopoverType]?: { left: number; top: number };
  }>({});
  const [popoverEdgeLefts, setPopoverEdgeLefts] = useState<{
    [key in PopoverType]?: string;
  }>({});

  const multiTriggerRef = useRef<HTMLButtonElement>(null);
  const multiTypeTriggerRef = useRef<HTMLButtonElement>(null);
  const multiFormTriggerRef = useRef<HTMLButtonElement>(null);
  const skyteamTriggerRef = useRef<HTMLButtonElement>(null);

  const multiPopoverRef = useRef<HTMLDivElement>(null);
  const multiTypePopoverRef = useRef<HTMLDivElement>(null);
  const multiFormPopoverRef = useRef<HTMLDivElement>(null);
  const skyteamPopoverRef = useRef<HTMLDivElement>(null);

  const triggerRefs = useMemo(
    () => ({
      multi: multiTriggerRef,
      'multi-type': multiTypeTriggerRef,
      'multi-form': multiFormTriggerRef,
      skyteam: skyteamTriggerRef,
    }),
    []
  );

  const popoverRefs = useMemo(
    () => ({
      multi: multiPopoverRef,
      'multi-type': multiTypePopoverRef,
      'multi-form': multiFormPopoverRef,
      skyteam: skyteamPopoverRef,
    }),
    []
  );

  const calculatePosition = useCallback(
    (type: PopoverType) => {
      const triggerRef = triggerRefs[type];
      const popoverRef = popoverRefs[type];
      if (triggerRef.current && popoverRef.current) {
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const popoverRect = popoverRef.current.getBoundingClientRect();
        const triggerCenter = triggerRect.left + triggerRect.width / 2;
        const left = triggerCenter - popoverRect.width / 2;
        const top = triggerRect.bottom + 8;
        setPopoverPositions(prev => ({ ...prev, [type]: { left, top } }));
        setPopoverEdgeLefts(prev => ({ ...prev, [type]: `${triggerCenter - left}px` }));
      }
    },
    [triggerRefs, popoverRefs]
  );

  const toggle = (type: PopoverType) => {
    if (openPopover === type) {
      setOpenPopover(null);
    } else {
      setOpenPopover(type);
    }
  };

  const close = () => setOpenPopover(null);

  useEffect(() => {
    if (openPopover) {
      calculatePosition(openPopover);
    }
  }, [openPopover, calculatePosition]);

  useEffect(() => {
    const handleResize = () => {
      if (openPopover) {
        calculatePosition(openPopover);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [openPopover, calculatePosition]);

  return {
    openPopover,
    popoverPositions,
    popoverEdgeLefts,
    triggerRefs,
    popoverRefs,
    toggle,
    close,
  };
};

// 탭 컨텐츠 컴포넌트들
const BookingTab: React.FC<{
  bookingType: number;
  flexibleDate: boolean;
  onBookingTypeClick: (type: number) => void;
  onFlexibleDateChange: (checked: boolean) => void;
  integratedPopover: ReturnType<typeof useIntegratedPopover>;
  multiFormPopover: ReturnType<typeof usePopover>;
}> = ({ bookingType, flexibleDate, onBookingTypeClick, onFlexibleDateChange, integratedPopover, multiFormPopover }) => (
  <div className="quickbookings">
    <div className="booking-widget__side-wrap">
      <div className="booking-widget__tabs">
        <ul className="booking-widget__tab" role="group" aria-label="예매 종류">
          <li role="presentation" className={`booking-widget__item ${bookingType === 0 ? '-active' : ''}`}>
            <button
              type="button"
              id="quickbookings-type0"
              className="booking-widget__item-press"
              aria-pressed={bookingType === 0}
              aria-controls="panel-type0"
              onClick={() => onBookingTypeClick(0)}
            >
              예매
            </button>
          </li>
          <li role="presentation" className={`booking-widget__item ${bookingType === 1 ? '-active' : ''}`}>
            <button
              type="button"
              id="quickbookings-type1"
              className="booking-widget__item-press"
              aria-pressed={bookingType === 1}
              aria-controls="panel-type1"
              tabIndex={bookingType === 1 ? 0 : -1}
              onClick={() => onBookingTypeClick(1)}
            >
              마일리지 예매
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div
      id="panel-type0"
      className={`quickbookings__panel ${bookingType === 0 ? '-active' : ''}`}
      aria-hidden={bookingType !== 0}
    >
      <BookingPanel
        type="booking"
        flexibleDate={flexibleDate}
        onFlexibleDateChange={onFlexibleDateChange}
        integratedPopover={integratedPopover}
        multiFormPopover={multiFormPopover}
      />
    </div>
    <div
      id="panel-type1"
      className={`quickbookings__panel ${bookingType === 1 ? '-active' : ''}`}
      aria-hidden={bookingType !== 1}
    >
      <BookingPanel
        type="mileage"
        flexibleDate={flexibleDate}
        onFlexibleDateChange={onFlexibleDateChange}
        integratedPopover={integratedPopover}
        multiFormPopover={multiFormPopover}
      />
    </div>
  </div>
);

const BookingPanel: React.FC<{
  type: 'booking' | 'mileage';
  flexibleDate: boolean;
  onFlexibleDateChange: (checked: boolean) => void;
  integratedPopover: ReturnType<typeof useIntegratedPopover>;
  multiFormPopover: ReturnType<typeof usePopover>;
}> = ({ type, flexibleDate, onFlexibleDateChange, integratedPopover, multiFormPopover }) => (
  <>
    <div className="quickbookings__booking-type">
      <div role="group" className="quickbookings__type" aria-label="여정 타입">
        <div className="quickbookings__type-item">
          <div className="selection">
            <input type="radio" id={`rdo1-1-${type}`} name={`quickbookings-type-${type}`} />
            <label htmlFor={`rdo1-1-${type}`} className="label">
              왕복
            </label>
          </div>
        </div>
        <div className="quickbookings__type-item">
          <div className="selection">
            <input type="radio" id={`rdo1-2-${type}`} name={`quickbookings-type-${type}`} />
            <label htmlFor={`rdo1-2-${type}`} className="label">
              편도
            </label>
          </div>
        </div>
      </div>
      <div className="quickbookings__type-link">
        <div className="selection">
          <a href="#" className="quickbookings__multiple">
            다구간
          </a>
        </div>
        {type === 'booking' ? (
          <button
            type="button"
            className="opener popover__trigger"
            aria-controls="popover-multi-type"
            aria-expanded={integratedPopover.openPopover === 'multi-type'}
            onClick={() => integratedPopover.toggle('multi-type')}
            ref={integratedPopover.triggerRefs['multi-type']}
          >
            <QuestionMark className="opener__icon" />

            <span className="_hidden">다구간 상세 안내</span>
          </button>
        ) : (
          <button
            type="button"
            className="opener popover__trigger"
            aria-controls="popover-multi"
            aria-expanded={integratedPopover.openPopover === 'multi'}
            onClick={() => integratedPopover.toggle('multi')}
            ref={integratedPopover.triggerRefs['multi']}
          >
            <QuestionMark className="opener__icon" />
            <span className="_hidden">다구간 상세 안내</span>
          </button>
        )}
        {type === 'mileage' && (
          <div className="quickbookings__type-link _mo-hidden">
            <div className="selection">
              <a href="#" className="quickbookings__multiple">
                스카이팀 보너스
              </a>
            </div>
            <button
              type="button"
              className="opener popover__trigger"
              aria-controls="popover-skyteam"
              aria-expanded={integratedPopover.openPopover === 'skyteam'}
              onClick={() => integratedPopover.toggle('skyteam')}
              ref={integratedPopover.triggerRefs['skyteam']}
            >
              <QuestionMark className="opener__icon" />
              <span className="_hidden">스카이팀 보너스 상세 안내</span>
            </button>
          </div>
        )}
      </div>
    </div>
    <div className="quickbookings__booking-wrap">
      <div className="quickbookings__separate -itinerary">
        <div className="quickbookings__aligner-inner">
          <button
            type="button"
            className="quickbookings__location -from _has-dialog"
            data-dialog-id="#dialog-departure"
            aria-describedby="error-message"
            aria-expanded="true"
            aria-controls="dialog-departure"
          >
            <span className="_hidden">출발지&nbsp;</span>
            <span className="quickbookings__code">SEL</span>
            <span className="quickbookings__airport">&nbsp;Seoul/Incheon </span>
          </button>

          <button
            type="button"
            className="quickbookings__location -to -off _has-dialog"
            data-dialog-id="#dialog-arrival"
            aria-expanded="true"
            aria-controls="dialog-arrival"
          >
            <span className="quickbookings__code">To</span>
            <span className="quickbookings__airport">&nbsp;도착지</span>
          </button>

          <button type="button" className="quickbookings__swap">
            <SwapIcon className="quickbookings__swap-icon" />
            <span className="_hidden">출발지와 도착지 바꾸기</span>
          </button>

          <div className="_hidden" aria-live="assertive">
            <p>출발지와 도착지가 바뀌었습니다.</p>
          </div>
        </div>
      </div>
      <div className="quickbookings__aligner">
        <div className="quickbookings__separate -date">
          <p className="quickbookings__label label _mo-hidden">탑승일&nbsp;</p>
          <div className="forms">
            <button
              type="button"
              id={`date-${type}-${type === 'booking' ? '0' : '1'}`}
              className="quickbookings__datepicker _has-dialog"
              data-dialog-id="#dialog-date"
              aria-describedby="error-message2"
              aria-expanded="true"
              aria-controls="dialog-date"
            >
              <DateIcon className="quickbookings__date-icon" />
              <span className="_hidden">탑승일&nbsp;</span>
              <span className="quickbookings__date">
                <span className="_hidden">가는날&nbsp;</span>
                <span className="-selected">2023年 03月 23日</span>
                <span aria-hidden="true" className="-wave">
                  ~
                </span>
                <span className="_hidden">오는날&nbsp;</span>
                <span className="-selected">2023年 03月 23日</span>
              </span>
            </button>
          </div>
        </div>
        <div className="quickbookings__separate -passenger">
          <p className="quickbookings__label label">승객 수&nbsp;</p>
          <div className="forms">
            <button
              type="button"
              id={`passenger-${type}-${type === 'booking' ? '0' : '1'}`}
              className="quickbookings__passenger _has-dialog"
              data-dialog-id="#dialog-passenger"
              aria-describedby="error-message3"
              aria-expanded="true"
              aria-controls="dialog-departure"
            >
              <span className="_hidden">승객 수&nbsp;</span>
              <span className="quickbookings__select-data">성인1</span>
              <PassengerIcon className="quickbookings__passenger-icon" />
            </button>
          </div>
        </div>

        <div className="quickbookings__separate -seats">
          <p className="quickbookings__label label">좌석 등급&nbsp;</p>
          <div className="forms">
            <button
              type="button"
              id={`seatClass-${type}-${type === 'booking' ? '0' : '1'}`}
              className="quickbookings__seatclass _has-dialog"
              data-dialog-id="#dialog-seatclass"
              aria-describedby="error-seatclass"
              aria-expanded="true"
              aria-controls="dialog-seatclass"
            >
              <span className="_hidden">좌석 등급&nbsp;</span>
              <span className="quickbookings__select-data -off">선택하세요.</span>

              <ClassIcon className="quickbookings__class-icon" />
            </button>
          </div>
        </div>
        <div className="quickbookings__separate -flexible-date _mo-hidden">
          <div className="selection ">
            <input
              type="checkbox"
              checked={flexibleDate}
              id={`chk-${type}`}
              onChange={e => onFlexibleDateChange(e.target.checked)}
            />
            <label htmlFor={`chk-${type}`}>가까운 날짜 함께 조회</label>
          </div>
          {type === 'booking' ? (
            <button
              type="button"
              className="opener popover__trigger"
              aria-controls="popover-multi-form-0"
              aria-expanded={multiFormPopover.state.isOpen}
              onClick={multiFormPopover.toggle}
              ref={multiFormPopover.triggerRef}
            >
              <QuestionMark className="opener__icon" />
              <span className="_hidden"> 다구간 상세 안내</span>
            </button>
          ) : (
            <button
              type="button"
              className="opener popover__trigger"
              aria-controls="popover-multi-form2"
              aria-expanded={integratedPopover.openPopover === 'multi-form'}
              onClick={() => integratedPopover.toggle('multi-form')}
              ref={integratedPopover.triggerRefs['multi-form']}
            >
              <QuestionMark className="opener__icon" />
              <span className="_hidden"> 다구간 상세 안내</span>
            </button>
          )}
        </div>

        <div className="quickbookings__separate -search">
          <button type="button" className="booking-widget__find">
            검색
          </button>
        </div>
      </div>
    </div>
  </>
);

const ReservationTab: React.FC<{ type: 'reservation' | 'checkin' }> = ({ type }) => (
  <div className="quickmytrips">
    <div className="quickmytrips__aligner">
      <div className="quickmytrips__separate -number">
        <label htmlFor={`number-${type}`} className="quickmytrips__label label">
          <span className="_hidden">예약조회</span> 예약번호 또는 항공권번호
        </label>
        <div className="forms">
          <span id={`placeholder1-${type}`} className="placeholder">
            A1B2C3 또는 180-항공권 번호
          </span>
          <input
            type="text"
            className="quickmytrips__input"
            id={`number-${type}`}
            aria-describedby={`placeholder1-${type}`}
          />
        </div>
      </div>

      <div className="quickmytrips__separate -date">
        <p className="quickmytrips__label label">
          <span className="_hidden">예약조회</span> 탑승일&nbsp;
        </p>
        <div className="forms ">
          <button
            type="button"
            className="quickmytrips__datepicker _has-dialog"
            aria-describedby="error2 _has-dialog"
            data-dialog-id="#dialog-date"
          >
            <DateIcon className="quickbookings__date-icon" />
            <span className="_hidden">탑승일&nbsp;</span>
            <span className="quickmytrips__date -off">탑승일을 선택해 주세요</span>
          </button>
        </div>
      </div>

      <div className="quickmytrips__separate -lastname">
        <label htmlFor={`last-name-${type}`} className="quickmytrips__label label">
          <span className="_hidden">예약조회</span> 승객 성
        </label>
        <div className="forms ">
          <input
            type="text"
            className="quickmytrips__input"
            id={`last-name-${type}`}
            autoComplete="family-name"
            aria-describedby="quickmytrips-name-guide"
          />
        </div>
      </div>

      <div className="quickmytrips__separate -firstname">
        <label htmlFor={`first-name-${type}`} className="quickmytrips__label label">
          <span className="_hidden">예약조회</span> 승객 이름
        </label>
        <div className="forms ">
          <input type="text" className="quickmytrips__input" id={`first-name-${type}`} autoComplete="given-name" />
        </div>
      </div>

      <div className="quickmytrips__separate -search">
        <button type="button" className="booking-widget__find">
          조회
        </button>
      </div>
    </div>
  </div>
);

const FlightStatusTab: React.FC<{
  flightStatusType: number;
  flightStatusRadioType: number;
  scheduleRadioType: number;
  onFlightStatusTypeClick: (type: number) => void;
  onFlightStatusRadioChange: (type: number) => void;
  onScheduleRadioChange: (type: number) => void;
}> = ({
  flightStatusType,
  flightStatusRadioType,
  scheduleRadioType,
  onFlightStatusTypeClick,
  onFlightStatusRadioChange,
  onScheduleRadioChange,
}) => (
  <div className="quickstatus">
    <div className="booking-widget__side-wrap">
      <div className="booking-widget__tabs">
        <ul className="booking-widget__tab" role="group" aria-label="항공편 현황 종류">
          <li role="presentation" className={`booking-widget__item ${flightStatusType === 0 ? '-active' : ''}`}>
            <button
              type="button"
              id="quickstatus-type00"
              className="booking-widget__item-press"
              aria-pressed={flightStatusType === 0}
              aria-controls="panel-type00"
              onClick={() => onFlightStatusTypeClick(0)}
            >
              출도착 현황
            </button>
          </li>
          <li role="presentation" className={`booking-widget__item ${flightStatusType === 1 ? '-active' : ''}`}>
            <button
              type="button"
              id="quickstatus-type11"
              className="booking-widget__item-press"
              aria-pressed={flightStatusType === 1}
              aria-controls="panel-type11"
              tabIndex={flightStatusType === 1 ? 0 : -1}
              onClick={() => onFlightStatusTypeClick(1)}
            >
              스케줄 조회
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div
      id="panel-type00"
      className={`quickstatus__panel ${flightStatusType === 0 ? '-active' : ''}`}
      aria-hidden={flightStatusType !== 0}
    >
      <div className="quickstatus__booking-type">
        <div role="group" className="quickstatus__type" aria-label="여정 타입">
          <div className="quickstatus__type-item">
            <div className="selection">
              <input
                type="radio"
                id="rdo3-111"
                name="quickstatus-type3"
                checked={flightStatusRadioType === 0}
                onChange={() => onFlightStatusRadioChange(0)}
              />
              <label htmlFor="rdo3-111" className="label">
                출/도착지
              </label>
            </div>
          </div>
          <div className="quickstatus__type-item">
            <div className="selection">
              <input
                type="radio"
                id="rdo3-222"
                name="quickstatus-type3"
                checked={flightStatusRadioType === 1}
                onChange={() => onFlightStatusRadioChange(1)}
              />
              <label htmlFor="rdo3-222" className="label">
                편명
              </label>
            </div>
          </div>
        </div>
      </div>
      {flightStatusRadioType === 0 && (
        <div className="quickstatus__aligner" id="radiopanel1">
          <div className="quickstatus__separate -itinerary">
            <div className="quickstatus__aligner-inner">
              <button
                type="button"
                className="quickstatus__location -from -off _has-dialog"
                data-dialog-id="#dialog-departure"
                aria-describedby="error-message111"
              >
                <span className="_hidden">출발지&nbsp;</span>
                <span className="quickstatus__code">From</span>
                <span className="quickstatus__airport">&nbsp;출발지</span>
              </button>
              <button
                type="button"
                className="quickstatus__location -to -off _has-dialog"
                data-dialog-id="#dialog-arrival"
              >
                <span className="quickstatus__code">To</span>
                <span className="quickstatus__airport">&nbsp;도착지</span>
              </button>
              <button type="button" className="quickbookings__swap">
                <SwapIcon className="quickbookings__swap-icon" />
                <span className="_hidden">출발지와 도착지 바꾸기</span>
              </button>
            </div>
          </div>
          <div className="quickstatus__separate -date">
            <p className="quickstatus__label label">출발일&nbsp;</p>
            <div className="forms ">
              <button
                type="button"
                id="departure-status-0"
                className="quickstatus__datepicker _has-dialog"
                data-dialog-id="#dialog-date"
              >
                <DateIcon className="quickbookings__date-icon" />
                <span className="_hidden">출발일&nbsp;</span>
                <span className="quickstatus__date">
                  <span className="-selected">2023年 02月 22日</span>
                  <span aria-hidden="true" className="-wave">
                    ~
                  </span>
                  <span className="-selected">2023年 02月 22日</span>
                </span>
              </button>
            </div>
          </div>

          <div className="quickstatus__separate -search">
            <button type="button" className="booking-widget__find">
              조회
            </button>
          </div>
        </div>
      )}
      {flightStatusRadioType === 1 && (
        <div className="quickstatus__aligner" id="radiopanel2">
          <div className="quickstatus__separate -flightnum">
            <label htmlFor="flignt-num" className="quickstatus__label label">
              <span className="_hidden">KE를 제외한 숫자&nbsp;</span> 편명
            </label>
            <div className="forms ">
              <span id="flignt-num-placeholder" className="placeholder">
                예)001
              </span>
              <span className="quickstatus__preword">KE</span>
              <input
                type="text"
                className="quickstatus__input"
                id="flignt-num"
                aria-describedby="flignt-num-placeholder flignt-num-error"
              />
            </div>
          </div>
          <div className="quickstatus__separate -date">
            <p className="quickstatus__label label">출발일&nbsp;</p>
            <div className="forms ">
              <button
                type="button"
                id="departure-status-1"
                className="quickstatus__datepicker _has-dialog"
                data-dialog-id="#dialog-date"
              >
                <DateIcon className="quickbookings__date-icon" />
                <span className="_hidden">출발일&nbsp;</span>
                <span className="quickstatus__date">2022년 11월 28일</span>
              </button>
            </div>
          </div>

          <div className="quickstatus__separate -search">
            <button type="button" className="booking-widget__find">
              조회
            </button>
          </div>
        </div>
      )}
    </div>

    <div
      id="panel-type11"
      className={`quickstatus__panel ${flightStatusType === 1 ? '-active' : ''}`}
      aria-hidden={flightStatusType !== 1}
    >
      <div className="quickstatus__booking-type">
        <div role="group" className="quickstatus__type" aria-label="여정 타입">
          <div className="quickstatus__type-item">
            <div className="selection">
              <input
                type="radio"
                id="rdo4-1"
                name="quickstatus-type4"
                checked={scheduleRadioType === 0}
                onChange={() => onScheduleRadioChange(0)}
              />
              <label htmlFor="rdo4-1" className="label">
                왕복
              </label>
            </div>
          </div>
          <div className="quickstatus__type-item">
            <div className="selection">
              <input
                type="radio"
                id="rdo4-2"
                name="quickstatus-type4"
                checked={scheduleRadioType === 1}
                onChange={() => onScheduleRadioChange(1)}
              />
              <label htmlFor="rdo4-2" className="label">
                편도
              </label>
            </div>
          </div>
        </div>
      </div>
      {scheduleRadioType === 0 && (
        <div className="quickstatus__aligner" id="radiopanel3">
          <div className="quickstatus__separate -itinerary">
            <div className="quickstatus__aligner-inner">
              <button type="button" className="quickstatus__location -from -off" aria-describedby="error-message11">
                <span className="_hidden">출발지&nbsp;</span>
                <span className="quickstatus__code">From</span>
                <span className="quickstatus__airport">&nbsp;출발지</span>
              </button>

              <button type="button" className="quickstatus__location -to -off ">
                <span className="quickstatus__code">To</span>
                <span className="quickstatus__airport">&nbsp;도착지</span>
              </button>
              <button type="button" className="quickbookings__swap" disabled>
                <SwapIcon className="quickbookings__swap-icon" />
                <span className="_hidden">출발지와 도착지 바꾸기</span>
              </button>
            </div>
          </div>

          <div className="quickstatus__separate -date">
            <p className="quickstatus__label label">출발일</p>
            <div className="forms">
              <button
                type="button"
                className="quickstatus__datepicker _has-dialog"
                aria-describedby="error-departure3"
                data-dialog-id="#dialog-datepicker"
              >
                <DateIcon className="quickbookings__date-icon" />
                <span className="_hidden">출발일&nbsp;</span>
                <span className="quickstatus__date">2022년 11월 28일</span>
              </button>
            </div>
          </div>

          <div className="quickstatus__separate -search">
            <button type="button" className="booking-widget__find">
              조회
            </button>
          </div>
        </div>
      )}
      {scheduleRadioType === 1 && (
        <div className="quickstatus__aligner" id="radiopanel4">
          <div className="quickstatus__separate -itinerary">
            <div className="quickstatus__aligner-inner">
              <button type="button" className="quickstatus__location -from -off" aria-describedby="error-message222">
                <span className="_hidden">출발지&nbsp;</span>
                <span className="quickstatus__code">From</span>
                <span className="quickstatus__airport">&nbsp;출발지</span>
              </button>

              <button type="button" className="quickstatus__location -to -off ">
                <span className="quickstatus__code">To</span>
                <span className="quickstatus__airport">&nbsp;도착지</span>
              </button>
              <button type="button" className="quickbookings__swap" disabled>
                <SwapIcon className="quickbookings__swap-icon" />
                <span className="_hidden">출발지와 도착지 바꾸기</span>
              </button>
            </div>
          </div>

          <div className="quickstatus__separate -date">
            <p className="quickstatus__label label">출발일</p>
            <div className="forms ">
              <button type="button" className="quickstatus__datepicker _has-dialog" data-dialog-id="#dialog-datepicker">
                <DateIcon className="quickbookings__date-icon" />
                <span className="_hidden">출발일&nbsp;</span>
                <span className="quickstatus__date">2022년 11월 28일</span>
              </button>
            </div>
          </div>

          <div className="quickstatus__separate -search">
            <button type="button" className="booking-widget__find">
              조회
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
);

export const Tabs: React.FC<TabsProps> = ({
  variant = 'core',
  size = 'medium',
  tabs = [],
  activeTab = 0,
  onTabChange,
}) => {
  // 기본 상태 관리
  const [activeTabIndex, setActiveTabIndex] = useState(activeTab);
  const [bookingType, setBookingType] = useState(0);
  const [flexibleDate, setFlexibleDate] = useState(false);
  const [flightStatusType, setFlightStatusType] = useState(0);
  const [flightStatusRadioType, setFlightStatusRadioType] = useState(0);
  const [scheduleRadioType, setScheduleRadioType] = useState(0);

  // 팝오버 관리
  const integratedPopover = useIntegratedPopover();
  const multiFormPopover = usePopover();

  // 이벤트 핸들러들
  const handleTabClick = (index: number) => {
    if (tabs[index]?.disabled) return;

    setActiveTabIndex(index);
    onTabChange?.(index);

    // 모든 팝오버 닫기
    integratedPopover.close();
    multiFormPopover.close();
  };

  const handleBookingTypeClick = (typeIndex: number) => {
    setBookingType(typeIndex);
  };

  const handleFlexibleDateChange = (checked: boolean) => {
    setFlexibleDate(checked);
  };

  const handleFlightStatusTypeClick = (typeIndex: number) => {
    setFlightStatusType(typeIndex);
  };

  const handleFlightStatusRadioChange = (radioType: number) => {
    setFlightStatusRadioType(radioType);
  };

  const handleScheduleRadioChange = (radioType: number) => {
    setScheduleRadioType(radioType);
  };

  // 기본 탭 데이터 (기존 구조 유지)
  const defaultTabs: TabItem[] = [
    {
      id: 'tab_0',
      label: '항공권 예매',
      content: (
        <>
          <BookingTab
            bookingType={bookingType}
            flexibleDate={flexibleDate}
            onBookingTypeClick={handleBookingTypeClick}
            onFlexibleDateChange={handleFlexibleDateChange}
            integratedPopover={integratedPopover}
            multiFormPopover={multiFormPopover}
          />

          {/* 통합 팝오버들 */}
          <div
            id="popover-multi-type"
            className={`popover -down ${integratedPopover.openPopover === 'multi-type' ? '-active' : ''}`}
            aria-hidden={integratedPopover.openPopover !== 'multi-type'}
            style={{
              position: 'fixed',
              left: `${integratedPopover.popoverPositions['multi-type']?.left ?? 0}px`,
              top: `${integratedPopover.popoverPositions['multi-type']?.top ?? 0}px`,
              zIndex: 1000,
            }}
            ref={integratedPopover.popoverRefs['multi-type']}
          >
            <span
              className="popover__edge"
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-8px',
                left: integratedPopover.popoverEdgeLefts['multi-type'] ?? '50%',
                transform: 'translateX(-50%)',
              }}
            ></span>
            <h2 className="popover__h1">대한항공 유상 여정 다구간</h2>
            <ul className="list -disc">
              <li className="list__item">
                최소 2구간에서 최대 6구간까지 예약하실 수 있으며, 최대 3개 지역, 12개 항공편으로 예약 가능합니다. (단,
                국내선으로만 구성된 여정은 2구간만 가능)
              </li>
              <li className="list__item">
                첫번째 여정의 출발지와 마지막 여정의 도착지가 동일해 지는 경우, 이후 여정 추가는 불가합니다. (단, 한국,
                미주, 유럽, 대양주 지역에 한해 1회 추가 가능)
              </li>
            </ul>
            <button type="button" className="popover__close" onClick={integratedPopover.close}>
              닫기
            </button>
          </div>

          <div
            id="popover-multi"
            className={`popover -down ${integratedPopover.openPopover === 'multi' ? '-active' : ''}`}
            aria-hidden={integratedPopover.openPopover !== 'multi'}
            style={{
              position: 'fixed',
              left: `${integratedPopover.popoverPositions['multi']?.left ?? 0}px`,
              top: `${integratedPopover.popoverPositions['multi']?.top ?? 0}px`,
              zIndex: 1000,
            }}
            ref={integratedPopover.popoverRefs['multi']}
          >
            <span
              className="popover__edge"
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-8px',
                left: integratedPopover.popoverEdgeLefts['multi'] ?? '50%',
                transform: 'translateX(-50%)',
              }}
            ></span>
            <h2 className="popover__h1">대한항공 유상 여정 다구간</h2>
            <ul className="list -disc">
              <li className="list__item">
                최소 2구간에서 최대 6구간까지 예약하실 수 있으며, 최대 3개 지역, 12개 항공편으로 예약 가능합니다. (단,
                국내선으로만 구성된 여정은 2구간만 가능)
              </li>
              <li className="list__item">
                첫번째 여정의 출발지와 마지막 여정의 도착지가 동일해 지는 경우, 이후 여정 추가는 불가합니다. (단, 한국,
                미주, 유럽, 대양주 지역에 한해 1회 추가 가능)
              </li>
            </ul>
            <button type="button" className="popover__close" onClick={integratedPopover.close}>
              닫기
            </button>
          </div>

          <div
            id="popover-skyteam"
            className={`popover -down ${integratedPopover.openPopover === 'skyteam' ? '-active' : ''}`}
            aria-hidden={integratedPopover.openPopover !== 'skyteam'}
            style={{
              position: 'fixed',
              left: `${integratedPopover.popoverPositions['skyteam']?.left ?? 0}px`,
              top: `${integratedPopover.popoverPositions['skyteam']?.top ?? 0}px`,
              zIndex: 1000,
            }}
            ref={integratedPopover.popoverRefs['skyteam']}
          >
            <span
              className="popover__edge"
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-8px',
                left: integratedPopover.popoverEdgeLefts['skyteam'] ?? '50%',
                transform: 'translateX(-50%)',
              }}
            ></span>
            <h3 className="popover__h1">스카이팀 보너스 항공권</h3>
            <p className="popover__p">
              대한항공과 스카이팀 제휴 항공사가 운항하는 여정으로 보너스 항공권을 발권하실 수 있습니다. (단, 공동 운항편
              제외)
            </p>
            <button type="button" className="popover__close" onClick={integratedPopover.close}>
              닫기
            </button>
          </div>

          <div
            id="popover-multi-form2"
            className={`popover -down ${integratedPopover.openPopover === 'multi-form' ? '-active' : ''}`}
            aria-hidden={integratedPopover.openPopover !== 'multi-form'}
            style={{
              position: 'fixed',
              left: `${integratedPopover.popoverPositions['multi-form']?.left ?? 0}px`,
              top: `${integratedPopover.popoverPositions['multi-form']?.top ?? 0}px`,
              zIndex: 1000,
            }}
            ref={integratedPopover.popoverRefs['multi-form']}
          >
            <span
              className="popover__edge"
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-8px',
                left: integratedPopover.popoverEdgeLefts['multi-form'] ?? '50%',
                transform: 'translateX(-50%)',
              }}
            ></span>
            <span className="popover__h1 _hidden">주변 일자 조회</span>
            <p className="popover__p">
              선택하신 날짜 기준 +- 3일에 해당하는 운임을 먼저 확인합니다. 구매와 동시 승급, 일부 다구간 여정 진행 시
              이용 불가합니다.
            </p>
            <button type="button" className="popover__close" onClick={integratedPopover.close}>
              닫기
            </button>
          </div>

          {/* 독립 팝오버 */}
          <div
            id="popover-multi-form-0"
            className={`popover -down ${multiFormPopover.state.isOpen ? '-active' : ''}`}
            aria-hidden={!multiFormPopover.state.isOpen}
            style={{
              position: 'fixed',
              left: `${multiFormPopover.state.position.left}px`,
              top: `${multiFormPopover.state.position.top}px`,
              zIndex: 1000,
              visibility: multiFormPopover.state.isReady ? 'visible' : 'hidden',
            }}
            ref={multiFormPopover.popoverRef}
          >
            <span
              className="popover__edge"
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-8px',
                left: multiFormPopover.state.edgeLeft,
                transform: 'translateX(-50%)',
              }}
            ></span>
            <span className="popover__h1 _hidden">주변 일자 조회</span>
            <p className="popover__p">
              선택하신 날짜 기준 +- 3일에 해당하는 운임을 먼저 확인합니다. 구매와 동시 승급, 일부 다구간 여정 진행 시
              이용 불가합니다.
            </p>
            <button type="button" className="popover__close" onClick={multiFormPopover.close}>
              닫기
            </button>
          </div>
        </>
      ),
    },
    {
      id: 'tab_1',
      label: '예약조회',
      content: <ReservationTab type="reservation" />,
    },
    {
      id: 'tab_2',
      label: '체크인',
      content: <ReservationTab type="checkin" />,
    },
    {
      id: 'tab_3',
      label: '항공편 현황',
      content: (
        <FlightStatusTab
          flightStatusType={flightStatusType}
          flightStatusRadioType={flightStatusRadioType}
          scheduleRadioType={scheduleRadioType}
          onFlightStatusTypeClick={handleFlightStatusTypeClick}
          onFlightStatusRadioChange={handleFlightStatusRadioChange}
          onScheduleRadioChange={handleScheduleRadioChange}
        />
      ),
    },
  ];

  const tabItems = tabs.length > 0 ? tabs : defaultTabs;

  return (
    <div className={`booking-widget tabs tabs--${variant} tabs--${size}`}>
      <h2 className="_hidden" id="booking-widget">
        빠른 예매
      </h2>
      <ul
        role="tablist"
        className="booking-widget__list"
        aria-labelledby="booking-widget"
        aria-orientation="horizontal"
      >
        {tabItems.map((tab, index) => (
          <li
            key={tab.id}
            role="presentation"
            className={`booking-widget__itm ${index === activeTabIndex ? '-active' : ''}`}
          >
            <button
              type="button"
              role="tab"
              id={tab.id}
              className="booking-widget__button"
              aria-selected={index === activeTabIndex}
              aria-controls={`panel_${index}`}
              tabIndex={index === activeTabIndex ? 0 : -1}
              disabled={tab.disabled}
              onClick={() => handleTabClick(index)}
            >
              <span className="booking-widget__txt">{tab.label}</span>
            </button>
          </li>
        ))}
      </ul>

      {tabItems.map((tab, index) => (
        <div
          key={`panel_${index}`}
          role="tabpanel"
          id={`panel_${index}`}
          className={`booking-widget__panel ${index === activeTabIndex ? '-active' : ''}`}
          aria-labelledby={tab.id}
          aria-hidden={index !== activeTabIndex}
          tabIndex={0}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};

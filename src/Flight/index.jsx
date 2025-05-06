  export const Flight = (props) => {
    return (
      <div className="flight">
        <div class="flight__icon"></div>
        <div class="flight__info">
          <div class="flight__stop">
            <p class="flight__stop-type">Odlet:</p>
            <p class="flight__stop-city">{props.cityFrom}</p>
            <p class="flight__stop-time">{props.timeFrom}</p>
          </div>
          <div class="flight__stop">
            <p class="flight__stop-type">Přílet:</p>
            <p class="flight__stop-city">{props.cityTo}</p>
            <p class="flight__stop-time">{props.timeTo}</p>
          </div>
        </div>
      </div>
    );
  };
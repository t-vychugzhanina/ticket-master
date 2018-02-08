var AdvOptionsComponent = (function(){
    return {

        template:`<add-options class="content__aside">
            <form class="aside__location-form" method="get">
                <h3 class="aside__title">Your location</h3>
                    <input class="location-form__item" name="city" type="text" placeholder="Enter city">
                <h3 class="aside__title">Shop for Events</h3>
                    <select name="category" class="location-form__item">
                        <option selected disabled>Select category</option>
                        <option>Music</option>
                        <option>Sport</option>
                        <option>Arts & Theater</option>
                        <option>Family</option>
                        <option>VIP</option>
                        <option>Family</option>
                        <option>Deals</option>
                    </select>
                    <select name="sub-category" class="location-form__item">
                        <option selected disabled>Select sub category</option>
                        <option>Music</option>
                        <option>Sport</option>
                        <option>Arts & Theater</option>
                        <option>Family</option>
                        <option>VIP</option>
                        <option>Family</option>
                        <option>Deals</option>
                    </select>
                    <span class="aside__text">From:</span>
                    <input class="location-form__item input-date" name="date-start" id="datePicker" type="date" placeholder="Select start data">
                    <span class="aside__text">To:</span>
                    <input class="location-form__item input-date" name="date-end" id="datePicker2" type="date" placeholder="Select end data">
                    <button class="location-form__submit" type="submit">Apply</button>
                </form>
        </add-options>`,

        init: function(){
            alert(template);
        },

        getData: function(url){
            /*
            * Тут будет код ajax запроса на сервер, который в случае успеха сохранит результат в переменную res
            */

            //Отрисуем наши данные
            this.render(res);
        }

    }
})();
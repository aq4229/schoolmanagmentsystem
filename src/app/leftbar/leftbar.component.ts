import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss'],
})
export class LeftbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // tslint:disable-next-line: only-arrow-functions
    $(document).ready(function() {
      // e.preventDefault();
      // tslint:disable-next-line: only-arrow-functions
      $('.innermenu, .innermenusub').hide('fast');

      $('.innermenu, .innermenusub').hide('fast');

      $('.dropmenu').click(function(e) {
        e.preventDefault();

        $('.innermenu').slideUp('slow');

        $(this).next('.innermenu').slideToggle('slow');

        $(this).next('.innermenu').find('li .innermenusub').fadeOut('slow');

        $(this).next('.innermenu').find('.plusminus').addClass('fa-plus');

        $(this).find('.plusminus').toggleClass('fa-minus fa-plus');

        if ($(this).find('i .plusminus').hasClass('fa-plus')) {
          $(this).find('i .plusminus').addClass('fa-minus');
          $(this).find('i .plusminus').removeClass('fa-plus');
        } else {
          $(this).find('i .plusminus').addClass('fa-minus');
        }

        // var a=$(this).find('.plusminus').hasClass('fa-plus');

        //

        // $('.plusminus').addClass('fa-plus');
      });

      $('.innermenu-item').click(function(e) {
        /* Act on the event */
        e.preventDefault();

        $(this).find('.plusminus').toggleClass('fa-minus fa-plus');

        $(this).next('.innermenusub').slideToggle('slow');
      });
    });
  }
}

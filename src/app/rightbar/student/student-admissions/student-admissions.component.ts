import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-student-admissions',
  templateUrl: './student-admissions.component.html',
  styleUrls: ['./student-admissions.component.scss']
})
export class StudentAdmissionsComponent implements OnInit {
  listyle = 'admission';
  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {
    $('a').click(() => {
      $(this).parent('li').css( 'background-color', 'red' );
    });

    });
    $('.next').click(function(){
      const nextId = $(this).parents('.tab-pane').next().attr('id');
      $('[href=#' + nextId + ']').tab('show');
      return false;
    });
    $('.back').click(function(){
      const prevId = $(this).parents('.tab-pane').prev().attr('id');
      $('[href=#' + prevId + ']').tab('show');
      return false;
    });
    // tslint:disable-next-line: only-arrow-functions
    $('a[data-toggle = "tab"]' ).on('shown.bs.tab', function(e) {
      const step = $(e.target).data('step');
      // tslint:disable-next-line: radix
      const percent = (parseInt(step) / 4) * 100;
      $('.progress-bar').css('width: percent + "%"');
      $('.progress-bar').text('Step ' + step + ' of 5');
    });
    // tslint:disable-next-line: only-arrow-functions
    $('.first').click(function(){
      $('#myWizard a:first').tab('show');
    });




  }
  handle(get){
    console.log(get);
    this.listyle = get;

  }

}

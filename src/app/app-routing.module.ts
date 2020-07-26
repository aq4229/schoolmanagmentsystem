import { NgModule, Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './rightbar/dashboard/dashboard.component';
import { CampusSettingsComponent } from './rightbar/academics/campus-settings/campus-settings.component';
import { SettingComponent } from './rightbar/academics/academic_settings/setting.component';
import { StudentOperationComponent } from './rightbar/student/student-operation/student-operation.component';
import { AppComponent } from './app.component';
import { FormSettingsComponent } from './rightbar/student/student_settings/form-settings/form-settings.component';
import { StudentBulkuploadComponent } from './rightbar/student/student_settings/student-bulkupload/student-bulkupload.component';
import { StudentAdmissionsComponent } from './rightbar/student/student-admissions/student-admissions.component';
import { FeeComponent } from './rightbar/finance/fee/fee.component';
import { StudentAttendanceReportComponent } from './rightbar/attendance/student-attendance-report/student-attendance-report.component';
import { StudentAttendanceComponent } from './rightbar/attendance/student-attendance/student-attendance.component';
import { FeeBankConciliationComponent } from './rightbar/finance/reports/fee-bank-conciliation/fee-bank-conciliation.component';
import { FeeCollectionSchoolComponent } from './rightbar/finance/reports/fee-collection-school/fee-collection-school.component';
import { FeeSectionAndHeadWiseComponent } from './rightbar/finance/reports/fee-section-and-head-wise/fee-section-and-head-wise.component';
import { FeeSummaryComponent } from './rightbar/finance/reports/fee-summary/fee-summary.component';
import { FeeCollectionUserComponent } from './rightbar/finance/reports/fee-collection-user/fee-collection-user.component';
import { FeeComprehensiveCampusComponent } from './rightbar/finance/reports/fee-comprehensive-campus/fee-comprehensive-campus.component';
import { FeeComprehensiveHeadOfficeComponent } from './rightbar/finance/reports/fee-comprehensive-head-office/fee-comprehensive-head-office.component';
import { FeeComprehensiveSectionInchangeComponent } from './rightbar/finance/reports/fee-comprehensive-section-inchange/fee-comprehensive-section-inchange.component';
import { FeeListComponent } from './rightbar/finance/reports/fee-list/fee-list.component';
import { FineCollectionComponent } from './rightbar/finance/reports/fine-collection/fine-collection.component';
import { StudentlistWithRemainingBalComponent } from './rightbar/finance/reports/studentlist-with-remaining-bal/studentlist-with-remaining-bal.component';
import { FeeSummaryDetailsComponent } from './rightbar/finance/reports/fee-summary-details/fee-summary-details.component';
import { AttendanceReportComponent } from './rightbar/humar_resource/Attendance/attendance-report/attendance-report.component';
import { HrAttendanceComponent } from './rightbar/humar_resource/Attendance/hr-attendance/hr-attendance.component';
import { AddEmployeeComponent } from './rightbar/humar_resource/Employees/add-employee/add-employee.component';
import { EmployeeSalaryComponent } from './rightbar/humar_resource/Employees/employee-salary/employee-salary.component';
import { SearchEmployeeComponent } from './rightbar/humar_resource/Employees/search-employee/search-employee.component';
import { EmployeeLeavesComponent } from './rightbar/humar_resource/Leaves/employee-leaves/employee-leaves.component';
import { HolidayCalendarComponent } from './rightbar/humar_resource/Leaves/holiday-calendar/holiday-calendar.component';
import { EmployeeLoanComponent } from './rightbar/humar_resource/Payroll/employee-loan/employee-loan.component';
import { HeadsLeadgerComponent } from './rightbar/humar_resource/Payroll/heads-leadger/heads-leadger.component';
import { LoanReportComponent } from './rightbar/humar_resource/Payroll/loan-report/loan-report.component';
import { SalaryRegisterComponent } from './rightbar/humar_resource/Payroll/salary-register/salary-register.component';
import { SerachRegisterComponent } from './rightbar/humar_resource/Payroll/serach-register/serach-register.component';
import { DepartmentComponent } from './rightbar/humar_resource/Setting/department/department.component';
import { DesignationsComponent } from './rightbar/humar_resource/Setting/designations/designations.component';
import { LeaveTypeComponent } from './rightbar/humar_resource/Setting/leave-type/leave-type.component';
import { PayHeadComponent } from './rightbar/humar_resource/Setting/pay-head/pay-head.component';
import { RegisterTypeComponent } from './rightbar/humar_resource/Setting/register-type/register-type.component';
import { SalaryRulesComponent } from './rightbar/humar_resource/Setting/salary-rules/salary-rules.component';
import { ShiftsComponent } from './rightbar/humar_resource/Setting/shifts/shifts.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'campus',
    component: CampusSettingsComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
    path: 'admission',
    component: StudentAdmissionsComponent
  },

  {
    path: 'operation',
    component: StudentOperationComponent
  },
  {
    path: 'formsetting',
    component: FormSettingsComponent
  },
  {
    path: 'bulkupload',
    component: StudentBulkuploadComponent
  },
  {
    path: 'fee',
    component: FeeComponent
  },
  {
    path: 'student_attendance_report',
    component: StudentAttendanceReportComponent
  },
  {
    path: 'student_attendance',
    component: StudentAttendanceComponent
  },

{
  path: 'feebankconciliation',
  component: FeeBankConciliationComponent
},
{
  path: 'feecollectionschool',
  component: FeeCollectionSchoolComponent
},
{
  path: 'feecollectionuser',
  component: FeeCollectionUserComponent
},
{
  path: 'feecampuswise',
  component: FeeComprehensiveCampusComponent
},
{
  path: 'feeheadoffice',
  component: FeeComprehensiveHeadOfficeComponent
},
{
  path: 'feesectionincharge',
  component: FeeComprehensiveSectionInchangeComponent
},
{
  path: 'feelist',
  component: FeeListComponent
},
{
  path: 'feesectionandhead',
  component: FeeSectionAndHeadWiseComponent
},
{
  path: 'feesummary',
  component: FeeSummaryComponent
},
{
  path: 'feesummarydetails',
  component: FeeSummaryDetailsComponent
},
{
  path: 'finecollection',
  component: FineCollectionComponent
},
{
  path: 'remainingbalance',
  component: StudentlistWithRemainingBalComponent
},

{path: 'attendance_report',
component: AttendanceReportComponent
},
{
  path: 'hr_attendance',
  component: HrAttendanceComponent
},
{
  path: 'hr_dashboard',
  component: DashboardComponent
},
{
  path: 'new_employee',
  component: AddEmployeeComponent
},
{
  path: 'employee_salary',
  component: EmployeeSalaryComponent
},
{
  path: 'search_employee',
  component: SearchEmployeeComponent
},
{
  path: 'employee_leave',
  component: EmployeeLeavesComponent
},
{
  path: 'holiday_calendar',
  component: HolidayCalendarComponent
},
{
  path: 'employee_loan',
  component: EmployeeLoanComponent
},
{
  path: 'heads_leadger',
  component: HeadsLeadgerComponent
},
{
  path: 'loan_report',
  component: LoanReportComponent
}, {
  path: 'salary_register',
  component: SalaryRegisterComponent
}, {
  path: 'searchregister',
  component: SerachRegisterComponent
},
{
  path: 'hr_department',
  component: DepartmentComponent
}, {
  path: 'hr_designation',
  component: DesignationsComponent
}, {
  path: 'hr_leave',
  component: LeaveTypeComponent
}, {
  path: 'pay_head',
  component: PayHeadComponent
}, {
  path: 'hr_register_type',
  component: RegisterTypeComponent
}, {
  path: 'salary_rules',
  component: SalaryRulesComponent
}, {
  path: 'employee_shifts',
  component: ShiftsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatSliderModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

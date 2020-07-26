import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { DashboardComponent } from './rightbar/dashboard/dashboard.component';
import { CampusSettingsComponent } from './rightbar/academics/campus-settings/campus-settings.component';
import { SettingComponent } from './rightbar/academics/academic_settings/setting.component';
import { StudentAdmissionsComponent } from './rightbar/student/student-admissions/student-admissions.component';
import { StudentOperationComponent } from './rightbar/student/student-operation/student-operation.component';
import { StudentListComponent } from './rightbar/student/reports/student-list/student-list.component';
import { StudentFormerComponent } from './rightbar/student/reports/student-former/student-former.component';
import { StudentStandardComponent } from './rightbar/student/reports/student-standard/student-standard.component';
import { StrengthCategorywiseComponent } from './rightbar/student/reports/strength-categorywise/strength-categorywise.component';
import { StrengthGenderwiseComponent } from './rightbar/student/reports/strength-genderwise/strength-genderwise.component';
import { StrengthInoutComponent } from './rightbar/student/reports/strength-inout/strength-inout.component';
import { StrengthSectionwiseComponent } from './rightbar/student/reports/strength-sectionwise/strength-sectionwise.component';
import { StrengthWeeklyComponent } from './rightbar/student/reports/strength-weekly/strength-weekly.component';
import { StudentAdmissionComponent } from './rightbar/student/reports/student-admission/student-admission.component';
import { StudentBirthdayComponent } from './rightbar/student/reports/student-birthday/student-birthday.component';
import { StudentHealthComponent } from './rightbar/student/reports/student-health/student-health.component';
import { StudentPassoutComponent } from './rightbar/student/reports/student-passout/student-passout.component';
import { StudentPormotionComponent } from './rightbar/student/reports/student-pormotion/student-pormotion.component';
import { StudentReadmissionComponent } from './rightbar/student/reports/student-readmission/student-readmission.component';
import { StudentSiblingComponent } from './rightbar/student/reports/student-sibling/student-sibling.component';
import { StudentTransferComponent } from './rightbar/student/reports/student-transfer/student-transfer.component';
import { StudentWithdrawalComponent } from './rightbar/student/reports/student-withdrawal/student-withdrawal.component';
import { FormSettingsComponent } from './rightbar/student/student_settings/form-settings/form-settings.component';
import { StudentBulkuploadComponent } from './rightbar/student/student_settings/student-bulkupload/student-bulkupload.component';
import { FeeComponent } from './rightbar/finance/fee/fee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { StudentAttendanceReportComponent } from './rightbar/attendance/student-attendance-report/student-attendance-report.component';
import { FeeSummaryDetailsComponent } from './rightbar/finance/reports/fee-summary-details/fee-summary-details.component';
import { HrAttendanceComponent } from './rightbar/humar_resource/Attendance/hr-attendance/hr-attendance.component';
import { AddEmployeeComponent } from './rightbar/humar_resource/Employees/add-employee/add-employee.component';
import { SearchEmployeeComponent } from './rightbar/humar_resource/Employees/search-employee/search-employee.component';
import { EmployeeSalaryComponent } from './rightbar/humar_resource/Employees/employee-salary/employee-salary.component';
import { HolidayCalendarComponent } from './rightbar/humar_resource/Leaves/holiday-calendar/holiday-calendar.component';
import { EmployeeLeavesComponent } from './rightbar/humar_resource/Leaves/employee-leaves/employee-leaves.component';
import { AttendanceReportComponent } from './rightbar/humar_resource/Attendance/attendance-report/attendance-report.component';
import { EmployeeLoanComponent } from './rightbar/humar_resource/Payroll/employee-loan/employee-loan.component';
import { SalaryRegisterComponent } from './rightbar/humar_resource/Payroll/salary-register/salary-register.component';
import { SerachRegisterComponent } from './rightbar/humar_resource/Payroll/serach-register/serach-register.component';
import { HeadsLeadgerComponent } from './rightbar/humar_resource/Payroll/heads-leadger/heads-leadger.component';
import { LoanReportComponent } from './rightbar/humar_resource/Payroll/loan-report/loan-report.component';
import { PayHeadComponent } from './rightbar/humar_resource/Setting/pay-head/pay-head.component';
import { SalaryRulesComponent } from './rightbar/humar_resource/Setting/salary-rules/salary-rules.component';
import { DepartmentComponent } from './rightbar/humar_resource/Setting/department/department.component';
import { DesignationsComponent } from './rightbar/humar_resource/Setting/designations/designations.component';
import { LeaveTypeComponent } from './rightbar/humar_resource/Setting/leave-type/leave-type.component';
import { RegisterTypeComponent } from './rightbar/humar_resource/Setting/register-type/register-type.component';
import { ShiftsComponent } from './rightbar/humar_resource/Setting/shifts/shifts.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftbarComponent,
    DashboardComponent,
    CampusSettingsComponent,
    SettingComponent,
    StudentAdmissionsComponent,
    StudentOperationComponent,
    StudentListComponent,
    StudentFormerComponent,
    StudentStandardComponent,
    StrengthCategorywiseComponent,
    StrengthGenderwiseComponent,
    StrengthInoutComponent,
    StrengthSectionwiseComponent,
    StrengthWeeklyComponent,
    StudentAdmissionComponent,
    StudentBirthdayComponent,
    StudentHealthComponent,
    StudentPassoutComponent,
    StudentPormotionComponent,
    StudentReadmissionComponent,
    StudentSiblingComponent,
    StudentTransferComponent,
    StudentWithdrawalComponent,
    FormSettingsComponent,
    StudentBulkuploadComponent,
    FeeComponent,
    StudentAttendanceReportComponent,
    FeeSummaryDetailsComponent,
    HrAttendanceComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent,
    EmployeeSalaryComponent,
    HolidayCalendarComponent,
    EmployeeLeavesComponent,
    AttendanceReportComponent,
    EmployeeLoanComponent,
    SalaryRegisterComponent,
    SerachRegisterComponent,
    HeadsLeadgerComponent,
    LoanReportComponent,
    PayHeadComponent,
    SalaryRulesComponent,
    DepartmentComponent,
    DesignationsComponent,
    LeaveTypeComponent,
    RegisterTypeComponent,
    ShiftsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

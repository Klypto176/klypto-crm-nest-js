/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/klypto-crm-nest-js/src/app.controller.ts"
/*!*******************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/app.controller.ts ***!
  \*******************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/klypto-crm-nest-js/src/app.service.ts");
let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/app.module.ts"
/*!***************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/app.module.ts ***!
  \***************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/klypto-crm-nest-js/src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/klypto-crm-nest-js/src/app.service.ts");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./apps/klypto-crm-nest-js/src/auth/auth.module.ts");
const users_module_1 = __webpack_require__(/*! ./users/users.module */ "./apps/klypto-crm-nest-js/src/users/users.module.ts");
const mail_module_1 = __webpack_require__(/*! ./mail/mail.module */ "./apps/klypto-crm-nest-js/src/mail/mail.module.ts");
const rbac_module_1 = __webpack_require__(/*! ./rbac/rbac.module */ "./apps/klypto-crm-nest-js/src/rbac/rbac.module.ts");
const employees_module_1 = __webpack_require__(/*! ./employees/employees.module */ "./apps/klypto-crm-nest-js/src/employees/employees.module.ts");
const attendance_module_1 = __webpack_require__(/*! ./attendance/attendance.module */ "./apps/klypto-crm-nest-js/src/attendance/attendance.module.ts");
const leaves_module_1 = __webpack_require__(/*! ./leaves/leaves.module */ "./apps/klypto-crm-nest-js/src/leaves/leaves.module.ts");
const payroll_module_1 = __webpack_require__(/*! ./payroll/payroll.module */ "./apps/klypto-crm-nest-js/src/payroll/payroll.module.ts");
const performance_module_1 = __webpack_require__(/*! ./performance/performance.module */ "./apps/klypto-crm-nest-js/src/performance/performance.module.ts");
const hrms_overview_module_1 = __webpack_require__(/*! ./hrms-overview/hrms-overview.module */ "./apps/klypto-crm-nest-js/src/hrms-overview/hrms-overview.module.ts");
const leads_module_1 = __webpack_require__(/*! ./leads/leads.module */ "./apps/klypto-crm-nest-js/src/leads/leads.module.ts");
const crm_overview_module_1 = __webpack_require__(/*! ./crm-overview/crm-overview.module */ "./apps/klypto-crm-nest-js/src/crm-overview/crm-overview.module.ts");
const recruitment_module_1 = __webpack_require__(/*! ./recruitment/recruitment.module */ "./apps/klypto-crm-nest-js/src/recruitment/recruitment.module.ts");
const grievances_module_1 = __webpack_require__(/*! ./grievances/grievances.module */ "./apps/klypto-crm-nest-js/src/grievances/grievances.module.ts");
const projects_module_1 = __webpack_require__(/*! ./projects/projects.module */ "./apps/klypto-crm-nest-js/src/projects/projects.module.ts");
const assets_module_1 = __webpack_require__(/*! ./assets/assets.module */ "./apps/klypto-crm-nest-js/src/assets/assets.module.ts");
const partners_module_1 = __webpack_require__(/*! ./partners/partners.module */ "./apps/klypto-crm-nest-js/src/partners/partners.module.ts");
const finance_module_1 = __webpack_require__(/*! ./finance/finance.module */ "./apps/klypto-crm-nest-js/src/finance/finance.module.ts");
const entities_module_1 = __webpack_require__(/*! ./entities/entities.module */ "./apps/klypto-crm-nest-js/src/entities/entities.module.ts");
const organizations_module_1 = __webpack_require__(/*! ./organizations/organizations.module */ "./apps/klypto-crm-nest-js/src/organizations/organizations.module.ts");
const approvals_module_1 = __webpack_require__(/*! ./approvals/approvals.module */ "./apps/klypto-crm-nest-js/src/approvals/approvals.module.ts");
const erp_overview_module_1 = __webpack_require__(/*! ./erp-overview/erp-overview.module */ "./apps/klypto-crm-nest-js/src/erp-overview/erp-overview.module.ts");
const policies_module_1 = __webpack_require__(/*! ./policies/policies.module */ "./apps/klypto-crm-nest-js/src/policies/policies.module.ts");
const biometric_module_1 = __webpack_require__(/*! ./biometric/biometric.module */ "./apps/klypto-crm-nest-js/src/biometric/biometric.module.ts");
const upload_module_1 = __webpack_require__(/*! ./common/upload/upload.module */ "./apps/klypto-crm-nest-js/src/common/upload/upload.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            rbac_module_1.RbacModule,
            users_module_1.UsersModule,
            employees_module_1.EmployeesModule,
            attendance_module_1.AttendanceModule,
            leaves_module_1.LeavesModule,
            payroll_module_1.PayrollModule,
            performance_module_1.PerformanceModule,
            hrms_overview_module_1.HrmsOverviewModule,
            leads_module_1.LeadsModule,
            crm_overview_module_1.CrmOverviewModule,
            recruitment_module_1.RecruitmentModule,
            grievances_module_1.GrievancesModule,
            projects_module_1.ProjectsModule,
            assets_module_1.AssetsModule,
            partners_module_1.PartnersModule,
            finance_module_1.FinanceModule,
            entities_module_1.EntitiesModule,
            organizations_module_1.OrganizationsModule,
            approvals_module_1.ApprovalsModule,
            erp_overview_module_1.ErpOverviewModule,
            policies_module_1.PoliciesModule,
            biometric_module_1.BiometricModule,
            upload_module_1.UploadModule,
            mail_module_1.MailModule,
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: process.env.SMTP_HOST || 'smtp.example.com',
                    port: Number(process.env.SMTP_PORT) || 587,
                    auth: {
                        user: process.env.SMTP_USER || 'user@example.com',
                        pass: process.env.SMTP_PASS || 'password',
                    },
                },
                defaults: {
                    from: '"No Reply" <noreply@klyptocrm.com>',
                },
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/app.service.ts"
/*!****************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/app.service.ts ***!
  \****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/approvals/approvals.controller.ts"
/*!***********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/approvals/approvals.controller.ts ***!
  \***********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApprovalsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const approvals_service_1 = __webpack_require__(/*! ./approvals.service */ "./apps/klypto-crm-nest-js/src/approvals/approvals.service.ts");
const approval_dto_1 = __webpack_require__(/*! ./dto/approval.dto */ "./apps/klypto-crm-nest-js/src/approvals/dto/approval.dto.ts");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
let ApprovalsController = class ApprovalsController {
    approvalsService;
    constructor(approvalsService) {
        this.approvalsService = approvalsService;
    }
    async findPending(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.approvalsService.getOrganizationId(req.user.sub);
        return this.approvalsService.findPending(orgId);
    }
    async processAction(req, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.approvalsService.getOrganizationId(req.user.sub);
        return this.approvalsService.processAction(orgId, dto);
    }
};
exports.ApprovalsController = ApprovalsController;
__decorate([
    (0, common_1.Get)('pending'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all pending approvals across the platform' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApprovalsController.prototype, "findPending", null);
__decorate([
    (0, common_1.Post)('action'),
    (0, swagger_1.ApiOperation)({ summary: 'Process an approval action (Approve/Reject)' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof approval_dto_1.ApprovalActionDto !== "undefined" && approval_dto_1.ApprovalActionDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ApprovalsController.prototype, "processAction", null);
exports.ApprovalsController = ApprovalsController = __decorate([
    (0, swagger_1.ApiTags)('Approvals'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('approvals'),
    __metadata("design:paramtypes", [typeof (_a = typeof approvals_service_1.ApprovalsService !== "undefined" && approvals_service_1.ApprovalsService) === "function" ? _a : Object])
], ApprovalsController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/approvals/approvals.module.ts"
/*!*******************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/approvals/approvals.module.ts ***!
  \*******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApprovalsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const approvals_service_1 = __webpack_require__(/*! ./approvals.service */ "./apps/klypto-crm-nest-js/src/approvals/approvals.service.ts");
const approvals_controller_1 = __webpack_require__(/*! ./approvals.controller */ "./apps/klypto-crm-nest-js/src/approvals/approvals.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
let ApprovalsModule = class ApprovalsModule {
};
exports.ApprovalsModule = ApprovalsModule;
exports.ApprovalsModule = ApprovalsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [approvals_controller_1.ApprovalsController],
        providers: [approvals_service_1.ApprovalsService],
        exports: [approvals_service_1.ApprovalsService],
    })
], ApprovalsModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/approvals/approvals.service.ts"
/*!********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/approvals/approvals.service.ts ***!
  \********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApprovalsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let ApprovalsService = class ApprovalsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrganizationId(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { organizationId: true },
        });
        if (!user || !user.organizationId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return user.organizationId;
    }
    async findPending(organizationId) {
        const [leaves, finances] = await Promise.all([
            this.prisma.leaveRequest.findMany({
                where: { organizationId, status: 'Pending' },
                include: { employee: { select: { name: true } } },
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.financialTransaction.findMany({
                where: {
                    organizationId,
                    status: { in: ['Pending', 'Draft'] },
                },
                include: { partner: { select: { name: true } } },
                orderBy: { date: 'desc' },
            }),
        ]);
        const unified = [
            ...leaves.map((l) => ({
                id: l.id,
                type: 'LEAVE',
                title: `${l.type} Leave Request`,
                requester: l.employee?.name || 'Unknown',
                amount: null,
                date: l.createdAt,
                priority: 'Medium',
                description: `${l.reason || 'No reason provided'}. (From ${new Date(l.startDate).toLocaleDateString()} to ${new Date(l.endDate).toLocaleDateString()})`,
                metadata: { startDate: l.startDate, endDate: l.endDate },
            })),
            ...finances.map((f) => ({
                id: f.id,
                type: 'FINANCE',
                title: f.type === 'PURCHASE_ORDER' ? 'Purchase Order' : 'Sales Invoice',
                requester: f.partner?.name || 'Unknown',
                amount: `$${f.amount.toLocaleString()}`,
                date: f.date,
                priority: f.amount > 5000 ? 'High' : 'Medium',
                description: `Reference: ${f.referenceNumber}. Transaction amount: $${f.amount.toLocaleString()}.`,
                metadata: { reference: f.referenceNumber },
            })),
        ];
        return unified.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    async processAction(organizationId, dto) {
        const { type, id, action } = dto;
        const status = action === 'APPROVE'
            ? type === 'FINANCE'
                ? 'Approved'
                : 'Approved'
            : 'Rejected';
        if (type === 'LEAVE') {
            const record = await this.prisma.leaveRequest.findFirst({
                where: { id, organizationId },
            });
            if (!record)
                throw new common_1.NotFoundException('Leave request not found');
            return this.prisma.leaveRequest.update({
                where: { id },
                data: { status },
            });
        }
        if (type === 'FINANCE') {
            const record = await this.prisma.financialTransaction.findFirst({
                where: { id, organizationId },
            });
            if (!record)
                throw new common_1.NotFoundException('Financial transaction not found');
            return this.prisma.financialTransaction.update({
                where: { id },
                data: { status },
            });
        }
        throw new common_1.BadRequestException('Invalid approval type');
    }
};
exports.ApprovalsService = ApprovalsService;
exports.ApprovalsService = ApprovalsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], ApprovalsService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/approvals/dto/approval.dto.ts"
/*!*******************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/approvals/dto/approval.dto.ts ***!
  \*******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApprovalActionDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ApprovalActionDto {
    type;
    id;
    action;
}
exports.ApprovalActionDto = ApprovalActionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'LEAVE', enum: ['LEAVE', 'FINANCE'] }),
    (0, class_validator_1.IsEnum)(['LEAVE', 'FINANCE']),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ApprovalActionDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'clx...id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ApprovalActionDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'APPROVE', enum: ['APPROVE', 'REJECT'] }),
    (0, class_validator_1.IsEnum)(['APPROVE', 'REJECT']),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ApprovalActionDto.prototype, "action", void 0);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/assets/assets.controller.ts"
/*!*****************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/assets/assets.controller.ts ***!
  \*****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssetsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const assets_service_1 = __webpack_require__(/*! ./assets.service */ "./apps/klypto-crm-nest-js/src/assets/assets.service.ts");
const asset_dto_1 = __webpack_require__(/*! ./dto/asset.dto */ "./apps/klypto-crm-nest-js/src/assets/dto/asset.dto.ts");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
let AssetsController = class AssetsController {
    assetsService;
    constructor(assetsService) {
        this.assetsService = assetsService;
    }
    async findAll(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.assetsService.getOrganizationId(req.user.sub);
        return this.assetsService.findAll(orgId);
    }
    async create(req, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.assetsService.getOrganizationId(req.user.sub);
        return this.assetsService.create(orgId, dto);
    }
    async update(req, id, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.assetsService.getOrganizationId(req.user.sub);
        return this.assetsService.update(orgId, id, dto);
    }
    async remove(req, id) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.assetsService.getOrganizationId(req.user.sub);
        return this.assetsService.delete(orgId, id);
    }
    async getStats(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.assetsService.getOrganizationId(req.user.sub);
        return this.assetsService.getStats(orgId);
    }
};
exports.AssetsController = AssetsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all assets' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AssetsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Add a new asset' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof asset_dto_1.CreateAssetDto !== "undefined" && asset_dto_1.CreateAssetDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AssetsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an asset' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_c = typeof asset_dto_1.UpdateAssetDto !== "undefined" && asset_dto_1.UpdateAssetDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AssetsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an asset' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AssetsController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get asset statistics' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AssetsController.prototype, "getStats", null);
exports.AssetsController = AssetsController = __decorate([
    (0, swagger_1.ApiTags)('Assets'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('assets'),
    __metadata("design:paramtypes", [typeof (_a = typeof assets_service_1.AssetsService !== "undefined" && assets_service_1.AssetsService) === "function" ? _a : Object])
], AssetsController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/assets/assets.module.ts"
/*!*************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/assets/assets.module.ts ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssetsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const assets_service_1 = __webpack_require__(/*! ./assets.service */ "./apps/klypto-crm-nest-js/src/assets/assets.service.ts");
const assets_controller_1 = __webpack_require__(/*! ./assets.controller */ "./apps/klypto-crm-nest-js/src/assets/assets.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
let AssetsModule = class AssetsModule {
};
exports.AssetsModule = AssetsModule;
exports.AssetsModule = AssetsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [assets_controller_1.AssetsController],
        providers: [assets_service_1.AssetsService],
        exports: [assets_service_1.AssetsService],
    })
], AssetsModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/assets/assets.service.ts"
/*!**************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/assets/assets.service.ts ***!
  \**************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssetsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let AssetsService = class AssetsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrganizationId(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { organizationId: true },
        });
        if (!user || !user.organizationId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return user.organizationId;
    }
    async findAll(organizationId) {
        return this.prisma.asset.findMany({
            where: { organizationId },
            include: {
                employee: { select: { id: true, name: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async create(organizationId, dto) {
        return this.prisma.asset.create({
            data: { ...dto, organizationId },
        });
    }
    async update(organizationId, id, dto) {
        const asset = await this.prisma.asset.findFirst({
            where: { id, organizationId },
        });
        if (!asset)
            throw new common_1.NotFoundException('Asset not found');
        return this.prisma.asset.update({
            where: { id },
            data: dto,
        });
    }
    async delete(organizationId, id) {
        const asset = await this.prisma.asset.findFirst({
            where: { id, organizationId },
        });
        if (!asset)
            throw new common_1.NotFoundException('Asset not found');
        return this.prisma.asset.delete({
            where: { id },
        });
    }
    async getStats(organizationId) {
        const assets = await this.prisma.asset.findMany({
            where: { organizationId },
        });
        const totalValuation = assets.reduce((sum, a) => sum + (a.value || 0), 0);
        const inUse = assets.filter((a) => a.status === 'In Use').length;
        const maintenance = assets.filter((a) => a.status === 'Maintenance').length;
        return { total: assets.length, totalValuation, inUse, maintenance };
    }
};
exports.AssetsService = AssetsService;
exports.AssetsService = AssetsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], AssetsService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/assets/dto/asset.dto.ts"
/*!*************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/assets/dto/asset.dto.ts ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAssetDto = exports.CreateAssetDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateAssetDto {
    name;
    category;
    location;
    value;
    status;
    employeeId;
}
exports.CreateAssetDto = CreateAssetDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'MacBook Pro M3 Max' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'IT Electronics' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'HQ - San Francisco' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3500 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateAssetDto.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'In Storage',
        enum: ['In Use', 'In Storage', 'Maintenance', 'Disposed'],
    }),
    (0, class_validator_1.IsEnum)(['In Use', 'In Storage', 'Maintenance', 'Disposed']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'clx...id', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "employeeId", void 0);
class UpdateAssetDto extends (0, swagger_1.PartialType)(CreateAssetDto) {
}
exports.UpdateAssetDto = UpdateAssetDto;


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/attendance/attendance.controller.ts"
/*!*************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/attendance/attendance.controller.ts ***!
  \*************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AttendanceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const attendance_service_1 = __webpack_require__(/*! ./attendance.service */ "./apps/klypto-crm-nest-js/src/attendance/attendance.service.ts");
const attendance_dto_1 = __webpack_require__(/*! ./dto/attendance.dto */ "./apps/klypto-crm-nest-js/src/attendance/dto/attendance.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
let AttendanceController = class AttendanceController {
    attendanceService;
    constructor(attendanceService) {
        this.attendanceService = attendanceService;
    }
    async create(req, createAttendanceDto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.attendanceService.getOrganizationId(req.user.sub);
        return this.attendanceService.create(orgId, createAttendanceDto);
    }
    async findAll(req, date, month, employeeId) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.attendanceService.getOrganizationId(req.user.sub);
        return this.attendanceService.findAll(orgId, date, month, employeeId);
    }
    async findOne(req, id) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.attendanceService.getOrganizationId(req.user.sub);
        return this.attendanceService.findOne(orgId, id);
    }
    async update(req, id, updateAttendanceDto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.attendanceService.getOrganizationId(req.user.sub);
        return this.attendanceService.update(orgId, id, updateAttendanceDto);
    }
};
exports.AttendanceController = AttendanceController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create or update attendance record' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof attendance_dto_1.CreateAttendanceDto !== "undefined" && attendance_dto_1.CreateAttendanceDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get organization attendance' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('date')),
    __param(2, (0, common_1.Query)('month')),
    __param(3, (0, common_1.Query)('employeeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific attendance record' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an attendance record' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_c = typeof attendance_dto_1.UpdateAttendanceDto !== "undefined" && attendance_dto_1.UpdateAttendanceDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "update", null);
exports.AttendanceController = AttendanceController = __decorate([
    (0, swagger_1.ApiTags)('Attendance'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('attendance'),
    __metadata("design:paramtypes", [typeof (_a = typeof attendance_service_1.AttendanceService !== "undefined" && attendance_service_1.AttendanceService) === "function" ? _a : Object])
], AttendanceController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/attendance/attendance.module.ts"
/*!*********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/attendance/attendance.module.ts ***!
  \*********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AttendanceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const attendance_service_1 = __webpack_require__(/*! ./attendance.service */ "./apps/klypto-crm-nest-js/src/attendance/attendance.service.ts");
const attendance_controller_1 = __webpack_require__(/*! ./attendance.controller */ "./apps/klypto-crm-nest-js/src/attendance/attendance.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
const realtime_module_1 = __webpack_require__(/*! ../realtime/realtime.module */ "./apps/klypto-crm-nest-js/src/realtime/realtime.module.ts");
let AttendanceModule = class AttendanceModule {
};
exports.AttendanceModule = AttendanceModule;
exports.AttendanceModule = AttendanceModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, realtime_module_1.RealtimeModule],
        controllers: [attendance_controller_1.AttendanceController],
        providers: [attendance_service_1.AttendanceService],
        exports: [attendance_service_1.AttendanceService],
    })
], AttendanceModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/attendance/attendance.service.ts"
/*!**********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/attendance/attendance.service.ts ***!
  \**********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AttendanceService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
const attendance_gateway_1 = __webpack_require__(/*! ../realtime/attendance.gateway */ "./apps/klypto-crm-nest-js/src/realtime/attendance.gateway.ts");
let AttendanceService = class AttendanceService {
    prisma;
    attendanceGateway;
    constructor(prisma, attendanceGateway) {
        this.prisma = prisma;
        this.attendanceGateway = attendanceGateway;
    }
    async getOrganizationId(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { organizationId: true },
        });
        if (!user || !user.organizationId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return user.organizationId;
    }
    async findAll(organizationId, dateStr, monthStr, employeeId) {
        let dateFilter = undefined;
        if (monthStr) {
            const [year, month] = monthStr.split('-').map(Number);
            const startOfMonth = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0, 0));
            const endOfMonth = new Date(Date.UTC(year, month, 0, 23, 59, 59, 999));
            dateFilter = {
                gte: startOfMonth,
                lte: endOfMonth,
            };
        }
        else if (dateStr) {
            const date = new Date(dateStr);
            const startOfDay = new Date(date);
            startOfDay.setUTCHours(0, 0, 0, 0);
            const endOfDay = new Date(date);
            endOfDay.setUTCHours(23, 59, 59, 999);
            dateFilter = {
                gte: startOfDay,
                lte: endOfDay,
            };
        }
        const records = await this.prisma.attendanceRecord.findMany({
            where: {
                organizationId,
                ...(dateFilter && { date: dateFilter }),
                ...(employeeId && { employeeId }),
            },
            include: {
                employee: true,
            },
            orderBy: {
                employee: {
                    name: 'asc',
                },
            },
        });
        return records;
    }
    async findOne(organizationId, id) {
        const record = await this.prisma.attendanceRecord.findFirst({
            where: { id, organizationId },
            include: { employee: true },
        });
        if (!record)
            throw new common_1.NotFoundException('Attendance record not found');
        return record;
    }
    async create(organizationId, dto) {
        const date = dto.date ? new Date(dto.date) : new Date();
        const startOfDay = new Date(date);
        startOfDay.setUTCHours(0, 0, 0, 0);
        const endOfDay = new Date(date);
        endOfDay.setUTCHours(23, 59, 59, 999);
        const existing = await this.prisma.attendanceRecord.findFirst({
            where: {
                organizationId,
                employeeId: dto.employeeId,
                date: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
            },
        });
        if (existing) {
            return this.update(organizationId, existing.id, dto);
        }
        const canonicalDate = new Date(date);
        canonicalDate.setUTCHours(12, 0, 0, 0);
        const record = await this.prisma.attendanceRecord.create({
            data: {
                organizationId,
                employeeId: dto.employeeId,
                date: canonicalDate,
                status: dto.status,
                checkIn: dto.checkIn ? new Date(dto.checkIn) : null,
                checkOut: dto.checkOut ? new Date(dto.checkOut) : null,
            },
            include: { employee: true },
        });
        this.attendanceGateway.emitAttendanceUpdated(organizationId, record);
        return record;
    }
    async update(organizationId, id, dto) {
        const existingRecord = await this.findOne(organizationId, id);
        const updateData = {};
        if (dto.status)
            updateData.status = dto.status;
        if (dto.checkIn) {
            const newCheckIn = new Date(dto.checkIn);
            if (!existingRecord.checkIn || newCheckIn < existingRecord.checkIn) {
                updateData.checkIn = newCheckIn;
            }
        }
        if (dto.checkOut) {
            const newCheckOut = new Date(dto.checkOut);
            if (!existingRecord.checkOut || newCheckOut > existingRecord.checkOut) {
                updateData.checkOut = newCheckOut;
            }
        }
        const record = await this.prisma.attendanceRecord.update({
            where: { id },
            data: updateData,
            include: { employee: true },
        });
        this.attendanceGateway.emitAttendanceUpdated(organizationId, record);
        return record;
    }
};
exports.AttendanceService = AttendanceService;
exports.AttendanceService = AttendanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof attendance_gateway_1.AttendanceGateway !== "undefined" && attendance_gateway_1.AttendanceGateway) === "function" ? _b : Object])
], AttendanceService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/attendance/dto/attendance.dto.ts"
/*!**********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/attendance/dto/attendance.dto.ts ***!
  \**********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAttendanceDto = exports.CreateAttendanceDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateAttendanceDto {
    employeeId;
    date;
    status;
    checkIn;
    checkOut;
}
exports.CreateAttendanceDto = CreateAttendanceDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAttendanceDto.prototype, "employeeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAttendanceDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Present' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAttendanceDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAttendanceDto.prototype, "checkIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAttendanceDto.prototype, "checkOut", void 0);
class UpdateAttendanceDto extends (0, swagger_1.PartialType)(CreateAttendanceDto) {
}
exports.UpdateAttendanceDto = UpdateAttendanceDto;


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/auth/auth-events.service.ts"
/*!*****************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/auth/auth-events.service.ts ***!
  \*****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthEventsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const events_1 = __webpack_require__(/*! events */ "events");
let AuthEventsService = class AuthEventsService {
    emitter = new events_1.EventEmitter();
    createUserEventStream(userId) {
        return new rxjs_1.Observable((subscriber) => {
            const channel = `user:${userId}`;
            const listener = (payload) => {
                subscriber.next({ data: payload });
            };
            this.emitter.on(channel, listener);
            subscriber.next({
                data: {
                    type: 'CONNECTED',
                    userId,
                    at: new Date().toISOString(),
                    message: 'Realtime session channel connected',
                },
            });
            return () => {
                this.emitter.off(channel, listener);
            };
        });
    }
    emitUserStatusChange(userId, isActive) {
        this.emitter.emit(`user:${userId}`, {
            type: isActive ? 'USER_ACTIVATED' : 'USER_DEACTIVATED',
            userId,
            at: new Date().toISOString(),
            message: isActive
                ? 'Your account has been activated by HR/Admin.'
                : 'Your account has been deactivated by HR/Admin.',
        });
    }
};
exports.AuthEventsService = AuthEventsService;
exports.AuthEventsService = AuthEventsService = __decorate([
    (0, common_1.Injectable)()
], AuthEventsService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/auth/auth.controller.ts"
/*!*************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/auth/auth.controller.ts ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/klypto-crm-nest-js/src/auth/auth.service.ts");
const auth_dto_1 = __webpack_require__(/*! ./dto/auth.dto */ "./apps/klypto-crm-nest-js/src/auth/dto/auth.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const access_token_guard_1 = __webpack_require__(/*! ./guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const refresh_token_guard_1 = __webpack_require__(/*! ./guards/refresh-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/refresh-token.guard.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const users_service_1 = __webpack_require__(/*! ../users/users.service */ "./apps/klypto-crm-nest-js/src/users/users.service.ts");
const auth_events_service_1 = __webpack_require__(/*! ./auth-events.service */ "./apps/klypto-crm-nest-js/src/auth/auth-events.service.ts");
let AuthController = class AuthController {
    authService;
    jwtService;
    usersService;
    authEventsService;
    constructor(authService, jwtService, usersService, authEventsService) {
        this.authService = authService;
        this.jwtService = jwtService;
        this.usersService = usersService;
        this.authEventsService = authEventsService;
    }
    orgExists() {
        return this.authService.checkOrgExists();
    }
    signup(signupDto) {
        return this.authService.signup(signupDto);
    }
    login(loginDto) {
        return this.authService.login(loginDto);
    }
    inviteUser(req, dto) {
        const adminId = req.user?.sub;
        if (!adminId)
            throw new common_1.UnauthorizedException('Invalid user context');
        return this.authService.createUser(adminId, dto);
    }
    listUsers(req) {
        const adminId = req.user?.sub;
        if (!adminId)
            throw new common_1.UnauthorizedException('Invalid user context');
        return this.authService.listOrgUsers(adminId);
    }
    toggleUserStatus(req, targetId) {
        const adminId = req.user?.sub;
        if (!adminId)
            throw new common_1.UnauthorizedException('Invalid user context');
        return this.authService.toggleUserStatus(adminId, targetId);
    }
    logout(req) {
        const userId = req.user?.sub;
        if (!userId)
            throw new common_1.UnauthorizedException('Invalid user context');
        return this.authService.logout(userId);
    }
    refresh(req) {
        const userId = req.user?.sub;
        const refreshToken = req.user?.refreshToken;
        if (!userId || !refreshToken)
            throw new common_1.UnauthorizedException('Invalid user context');
        return this.authService.refreshTokens(userId, refreshToken);
    }
    me(req) {
        const userId = req.user?.sub;
        if (!userId)
            throw new common_1.UnauthorizedException('Invalid user context');
        return this.authService.getProfile(userId);
    }
    async events(req) {
        const token = typeof req.query?.token === 'string' ? String(req.query.token) : '';
        if (!token) {
            throw new common_1.UnauthorizedException('Missing access token');
        }
        let payload;
        try {
            payload = this.jwtService.verify(token, {
                secret: process.env.JWT_ACCESS_SECRET || 'access-secret',
            });
        }
        catch {
            throw new common_1.UnauthorizedException('Invalid access token');
        }
        if (!payload?.sub) {
            throw new common_1.UnauthorizedException('Invalid access token');
        }
        const user = await this.usersService.findActiveStatusById(payload.sub);
        if (!user || !user.isActive) {
            throw new common_1.UnauthorizedException('Account is inactive');
        }
        return this.authEventsService.createUserEventStream(payload.sub);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Get)('org-exists'),
    (0, swagger_1.ApiOperation)({ summary: 'Check whether an organization has been set up' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: auth_dto_1.OrgExistsResponseDto }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AuthController.prototype, "orgExists", null);
__decorate([
    (0, common_1.Post)('signup'),
    (0, swagger_1.ApiOperation)({
        summary: 'Bootstrap organization with first SuperAdmin account',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Organization and SuperAdmin created',
        type: auth_dto_1.AuthTokensResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Email already exists' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof auth_dto_1.SignupDto !== "undefined" && auth_dto_1.SignupDto) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: 'Sign in with email and password' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successfully signed in',
        type: auth_dto_1.AuthTokensResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Invalid credentials' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof auth_dto_1.LoginDto !== "undefined" && auth_dto_1.LoginDto) === "function" ? _g : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('invite-user'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({
        summary: 'SuperAdmin / Admin: create an employee user account',
    }),
    (0, swagger_1.ApiResponse)({ status: 201, type: auth_dto_1.CreatedUserResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden — admin only' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Email already exists' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_h = typeof auth_dto_1.CreateUserDto !== "undefined" && auth_dto_1.CreateUserDto) === "function" ? _h : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "inviteUser", null);
__decorate([
    (0, common_1.Get)('users'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({
        summary: 'SuperAdmin / Admin: list all users in the organization',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User list returned' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "listUsers", null);
__decorate([
    (0, common_1.Patch)('users/:id/toggle-status'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({
        summary: 'SuperAdmin / Admin: toggle a user active/inactive',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Status toggled' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "toggleUserStatus", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Logout and invalidate refresh token' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: auth_dto_1.LogoutResponseDto }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)('refresh'),
    (0, common_1.UseGuards)(refresh_token_guard_1.RefreshTokenGuard),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Refresh access token using refresh token' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: auth_dto_1.AuthTokensResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Access denied' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Get authenticated user profile' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: auth_dto_1.ProfileResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "me", null);
__decorate([
    (0, common_1.Sse)('events'),
    (0, swagger_1.ApiOperation)({
        summary: 'SSE stream for authenticated session events (deactivation/activation)',
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "events", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _c : Object, typeof (_d = typeof auth_events_service_1.AuthEventsService !== "undefined" && auth_events_service_1.AuthEventsService) === "function" ? _d : Object])
], AuthController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/auth/auth.module.ts"
/*!*********************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/auth/auth.module.ts ***!
  \*********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/klypto-crm-nest-js/src/auth/auth.service.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/klypto-crm-nest-js/src/auth/auth.controller.ts");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./apps/klypto-crm-nest-js/src/users/users.module.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./strategies/jwt.strategy */ "./apps/klypto-crm-nest-js/src/auth/strategies/jwt.strategy.ts");
const access_token_guard_1 = __webpack_require__(/*! ./guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const refresh_token_guard_1 = __webpack_require__(/*! ./guards/refresh-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/refresh-token.guard.ts");
const auth_events_service_1 = __webpack_require__(/*! ./auth-events.service */ "./apps/klypto-crm-nest-js/src/auth/auth-events.service.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, passport_1.PassportModule, jwt_1.JwtModule.register({})],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            jwt_strategy_1.AccessTokenStrategy,
            jwt_strategy_1.RefreshTokenStrategy,
            access_token_guard_1.AccessTokenGuard,
            refresh_token_guard_1.RefreshTokenGuard,
            auth_events_service_1.AuthEventsService,
        ],
        exports: [auth_service_1.AuthService, access_token_guard_1.AccessTokenGuard, refresh_token_guard_1.RefreshTokenGuard],
    })
], AuthModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/auth/auth.service.ts"
/*!**********************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/auth/auth.service.ts ***!
  \**********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const users_service_1 = __webpack_require__(/*! ../users/users.service */ "./apps/klypto-crm-nest-js/src/users/users.service.ts");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
const bcrypt = __importStar(__webpack_require__(/*! bcryptjs */ "bcryptjs"));
const system_role_enum_1 = __webpack_require__(/*! ./roles/system-role.enum */ "./apps/klypto-crm-nest-js/src/auth/roles/system-role.enum.ts");
const auth_events_service_1 = __webpack_require__(/*! ./auth-events.service */ "./apps/klypto-crm-nest-js/src/auth/auth-events.service.ts");
const DEFAULT_DASHBOARD_MODULES = [
    'dashboard',
    'leads',
    'erp',
    'projects',
    'recruitment',
    'grievances',
    'payroll',
    'hrms',
    'leave',
    'settings',
    'roles-access',
    'users',
];
const ROLE_MODULES = {
    SUPER_ADMIN: DEFAULT_DASHBOARD_MODULES,
    MANAGER: [
        'dashboard',
        'leads',
        'projects',
        'recruitment',
        'grievances',
        'employees',
        'settings',
    ],
    HR: [
        'dashboard',
        'erp',
        'hrms',
        'employees',
        'leave',
        'payroll',
        'users',
        'settings',
    ],
    EMPLOYEE: ['dashboard', 'employees', 'leave', 'grievances', 'settings'],
};
let AuthService = class AuthService {
    usersService;
    jwtService;
    prisma;
    authEventsService;
    constructor(usersService, jwtService, prisma, authEventsService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.prisma = prisma;
        this.authEventsService = authEventsService;
    }
    async signup(signupDto) {
        const orgCount = await this.prisma.organization.count();
        if (orgCount > 0) {
            throw new common_1.ConflictException('Organization is already initialized. Signup can only be used once.');
        }
        const existingUser = await this.usersService.findOneByEmail(signupDto.email);
        if (existingUser) {
            throw new common_1.ConflictException('User already exists');
        }
        const passwordHash = await bcrypt.hash(signupDto.password, 10);
        const organization = await this.prisma.organization.create({
            data: { name: signupDto.organizationName },
        });
        const user = await this.usersService.create({
            email: signupDto.email,
            fullName: signupDto.fullName,
            passwordHash,
            organization: { connect: { id: organization.id } },
        });
        const superAdminCode = `ADM-${Date.now().toString(36).toUpperCase()}-${user.id
            .slice(-4)
            .toUpperCase()}`;
        await this.prisma.employee.create({
            data: {
                name: signupDto.fullName,
                code: superAdminCode,
                role: system_role_enum_1.SystemRole.SUPER_ADMIN,
                department: 'Administration',
                status: 'Active',
                organization: { connect: { id: organization.id } },
                user: { connect: { id: user.id } },
            },
        });
        await this.ensureRole(system_role_enum_1.SystemRole.SUPER_ADMIN, DEFAULT_DASHBOARD_MODULES);
        await this.assignRole(user.id, system_role_enum_1.SystemRole.SUPER_ADMIN);
        const { roles, dashboardModules } = await this.getUserRoleAccess(user.id);
        const tokens = await this.getTokens(user.id, user.email, roles);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return {
            ...tokens,
            roles,
            dashboardModules,
            access: this.buildAccessFromRoles(roles, dashboardModules),
        };
    }
    async createUser(adminUserId, dto) {
        const adminUser = await this.usersService.findOneById(adminUserId);
        if (!adminUser)
            throw new common_1.UnauthorizedException('Invalid user context');
        const adminRoles = adminUser.roleAssignments.map((r) => r.role.name.toUpperCase());
        const canCreate = adminRoles.includes(system_role_enum_1.SystemRole.SUPER_ADMIN) ||
            adminRoles.includes(system_role_enum_1.SystemRole.HR);
        if (!canCreate)
            throw new common_1.ForbiddenException('Only super admins or HR can create user accounts');
        const createdRole = String(dto.role || '').toUpperCase();
        if (createdRole === system_role_enum_1.SystemRole.SUPER_ADMIN) {
            throw new common_1.ForbiddenException('Super Admin can only be created during first-time signup.');
        }
        if (createdRole === system_role_enum_1.SystemRole.ADMIN) {
            throw new common_1.ForbiddenException('ADMIN role is deprecated and cannot be assigned');
        }
        const isHrOnlyCreator = adminRoles.includes(system_role_enum_1.SystemRole.HR) &&
            !adminRoles.includes(system_role_enum_1.SystemRole.SUPER_ADMIN) &&
            !adminRoles.includes(system_role_enum_1.SystemRole.ADMIN);
        if (isHrOnlyCreator && createdRole !== system_role_enum_1.SystemRole.EMPLOYEE) {
            throw new common_1.ForbiddenException('HR can only create employee accounts');
        }
        const existing = await this.usersService.findOneByEmail(dto.email);
        if (existing)
            throw new common_1.ConflictException('A user with this email already exists');
        const passwordHash = await bcrypt.hash(dto.password, 10);
        const newUser = await this.usersService.create({
            email: dto.email,
            fullName: dto.fullName,
            passwordHash,
            organization: { connect: { id: adminUser.organizationId } },
        });
        const roleKey = createdRole;
        const roleModules = ROLE_MODULES[roleKey] ?? ROLE_MODULES.EMPLOYEE;
        await this.ensureRole(roleKey, roleModules);
        await this.assignRole(newUser.id, roleKey);
        const code = dto.employeeCode || `EMP-${Date.now().toString(36).toUpperCase()}`;
        const employee = await this.prisma.employee.create({
            data: {
                name: dto.fullName,
                code,
                role: dto.jobTitle || dto.role,
                department: dto.department || 'General',
                status: 'Active',
                organization: { connect: { id: adminUser.organizationId } },
                user: { connect: { id: newUser.id } },
            },
        });
        return {
            id: newUser.id,
            email: newUser.email,
            fullName: newUser.fullName,
            role: roleKey,
            isActive: newUser.isActive,
            employeeCode: employee.code,
        };
    }
    async checkOrgExists() {
        const count = await this.prisma.organization.count();
        return { exists: count > 0 };
    }
    async listOrgUsers(adminUserId) {
        const adminUser = await this.usersService.findOneById(adminUserId);
        if (!adminUser)
            throw new common_1.UnauthorizedException('Invalid user context');
        const users = await this.prisma.user.findMany({
            where: { organizationId: adminUser.organizationId },
            include: {
                roleAssignments: { include: { role: true } },
                employee: true,
            },
            orderBy: { createdAt: 'desc' },
        });
        return users.map((u) => ({
            id: u.id,
            email: u.email,
            fullName: u.fullName,
            isActive: u.isActive,
            roles: u.roleAssignments.map((ra) => ra.role.name),
            employeeCode: u.employee?.code ?? null,
            department: u.employee?.department ?? null,
            jobTitle: u.employee?.role ?? null,
            createdAt: u.createdAt,
        }));
    }
    async toggleUserStatus(adminUserId, targetUserId) {
        const adminUser = await this.usersService.findOneById(adminUserId);
        if (!adminUser)
            throw new common_1.UnauthorizedException();
        const adminRoles = adminUser.roleAssignments.map((r) => r.role.name.toUpperCase());
        if (!adminRoles.includes(system_role_enum_1.SystemRole.SUPER_ADMIN) &&
            !adminRoles.includes(system_role_enum_1.SystemRole.HR)) {
            throw new common_1.ForbiddenException('Only super admins or HR can modify user status');
        }
        const target = await this.prisma.user.findUnique({
            where: { id: targetUserId },
        });
        if (!target)
            throw new common_1.UnauthorizedException('Target user not found');
        const updated = await this.prisma.user.update({
            where: { id: targetUserId },
            data: {
                isActive: !target.isActive,
                ...(target.isActive ? { hashedRefreshToken: null } : {}),
            },
        });
        this.authEventsService.emitUserStatusChange(updated.id, updated.isActive);
        return { id: updated.id, isActive: updated.isActive };
    }
    async login(loginDto) {
        const user = await this.usersService.findOneByEmail(loginDto.email);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        if (!user.isActive) {
            throw new common_1.UnauthorizedException('Your account has been deactivated. Contact your administrator.');
        }
        const passwordMatches = await bcrypt.compare(loginDto.password, user.passwordHash);
        if (!passwordMatches) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        await this.syncSystemRoleModules();
        await this.enforceSingleSuperAdmin();
        await this.ensureUserHasDefaultRole(user.id, user.roleAssignments.length);
        const { roles, dashboardModules } = await this.getUserRoleAccess(user.id);
        const tokens = await this.getTokens(user.id, user.email, roles);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return {
            ...tokens,
            roles,
            dashboardModules,
            access: this.buildAccessFromRoles(roles, dashboardModules),
        };
    }
    async getProfile(userId) {
        if (!userId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        const user = await this.usersService.findOneById(userId);
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        await this.syncSystemRoleModules();
        await this.enforceSingleSuperAdmin();
        await this.ensureUserHasDefaultRole(user.id, user.roleAssignments.length);
        const { roles, dashboardModules } = await this.getUserRoleAccess(user.id);
        return {
            id: user.id,
            email: user.email,
            fullName: user.fullName,
            organization: user.organization,
            roles,
            dashboardModules,
            access: this.buildAccessFromRoles(roles, dashboardModules),
            isActive: user.isActive,
            createdAt: user.createdAt,
        };
    }
    async logout(userId) {
        await this.prisma.user.update({
            where: { id: userId },
            data: { hashedRefreshToken: null },
        });
        return { message: 'Logged out successfully' };
    }
    async refreshTokens(userId, refreshToken) {
        const user = await this.usersService.findOneById(userId);
        if (!user || !user.hashedRefreshToken) {
            throw new common_1.UnauthorizedException('Access Denied');
        }
        if (!user.isActive) {
            throw new common_1.UnauthorizedException('Your account has been deactivated. Contact your administrator.');
        }
        const refreshTokenMatches = await bcrypt.compare(refreshToken, user.hashedRefreshToken);
        if (!refreshTokenMatches) {
            throw new common_1.UnauthorizedException('Access Denied');
        }
        await this.syncSystemRoleModules();
        await this.enforceSingleSuperAdmin();
        await this.ensureUserHasDefaultRole(user.id, user.roleAssignments.length);
        const { roles, dashboardModules } = await this.getUserRoleAccess(user.id);
        const tokens = await this.getTokens(user.id, user.email, roles);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return {
            ...tokens,
            roles,
            dashboardModules,
            access: this.buildAccessFromRoles(roles, dashboardModules),
        };
    }
    async updateRefreshToken(userId, refreshToken) {
        const hashedRefreshToken = refreshToken
            ? await bcrypt.hash(refreshToken, 10)
            : null;
        await this.prisma.user.update({
            where: { id: userId },
            data: { hashedRefreshToken },
        });
    }
    async getTokens(userId, email, roles = []) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync({ sub: userId, email, roles }, {
                secret: process.env.JWT_ACCESS_SECRET || 'access-secret',
                expiresIn: '15m',
            }),
            this.jwtService.signAsync({ sub: userId, email, roles }, {
                secret: process.env.JWT_REFRESH_SECRET || 'refresh-secret',
                expiresIn: '7d',
            }),
        ]);
        return { accessToken, refreshToken };
    }
    async ensureRole(roleName, modules) {
        const dashboardModules = modules ?? ROLE_MODULES[roleName.toUpperCase()] ?? [];
        await this.prisma.role.upsert({
            where: { name: roleName },
            update: { dashboardModules },
            create: {
                name: roleName,
                description: `${roleName} system role`,
                isSystem: true,
                dashboardModules,
            },
        });
    }
    async assignRole(userId, roleName) {
        const role = await this.prisma.role.findUnique({
            where: { name: roleName },
        });
        if (!role)
            return;
        await this.prisma.userRole.upsert({
            where: { userId_roleId: { userId, roleId: role.id } },
            update: {},
            create: { userId, roleId: role.id },
        });
    }
    async getUserRoleAccess(userId) {
        const assignments = await this.prisma.userRole.findMany({
            where: { userId },
            include: { role: true },
        });
        const roles = assignments.map((entry) => entry.role.name);
        const dashboardModules = [
            ...new Set(assignments.flatMap((entry) => entry.role.dashboardModules || [])),
        ];
        return { roles, dashboardModules };
    }
    buildAccessFromRoles(roles, dashboardModules) {
        const roleSet = new Set(roles.map((role) => role.toUpperCase()));
        const hasSuperAdmin = roleSet.has(system_role_enum_1.SystemRole.SUPER_ADMIN);
        const roleDefaultModules = hasSuperAdmin
            ? DEFAULT_DASHBOARD_MODULES
            : roles.flatMap((role) => ROLE_MODULES[String(role).toUpperCase()] || []);
        const effectiveModules = hasSuperAdmin
            ? DEFAULT_DASHBOARD_MODULES
            : [...new Set([...(dashboardModules || []), ...roleDefaultModules])];
        return {
            isSuperAdmin: hasSuperAdmin,
            canManageUsers: hasSuperAdmin,
            canManageRbac: hasSuperAdmin,
            canViewDashboard: hasSuperAdmin || effectiveModules.length > 0,
            dashboardModules: effectiveModules,
        };
    }
    async ensureUserHasDefaultRole(userId, existingRoleCount) {
        if (existingRoleCount > 0)
            return;
        await this.ensureRole(system_role_enum_1.SystemRole.EMPLOYEE, ROLE_MODULES.EMPLOYEE);
        await this.assignRole(userId, system_role_enum_1.SystemRole.EMPLOYEE);
    }
    async syncSystemRoleModules() {
        await Promise.all([
            this.ensureRole(system_role_enum_1.SystemRole.SUPER_ADMIN, ROLE_MODULES.SUPER_ADMIN),
            this.ensureRole(system_role_enum_1.SystemRole.MANAGER, ROLE_MODULES.MANAGER),
            this.ensureRole(system_role_enum_1.SystemRole.HR, ROLE_MODULES.HR),
            this.ensureRole(system_role_enum_1.SystemRole.EMPLOYEE, ROLE_MODULES.EMPLOYEE),
        ]);
    }
    async enforceSingleSuperAdmin() {
        const superAdminRole = await this.prisma.role.findUnique({
            where: { name: system_role_enum_1.SystemRole.SUPER_ADMIN },
            select: { id: true },
        });
        if (!superAdminRole)
            return;
        const assignments = await this.prisma.userRole.findMany({
            where: { roleId: superAdminRole.id },
            orderBy: { createdAt: 'asc' },
            select: { id: true },
        });
        if (assignments.length <= 1)
            return;
        const assignmentsToRemove = assignments.slice(1).map((entry) => entry.id);
        await this.prisma.userRole.deleteMany({
            where: {
                id: { in: assignmentsToRemove },
            },
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _c : Object, typeof (_d = typeof auth_events_service_1.AuthEventsService !== "undefined" && auth_events_service_1.AuthEventsService) === "function" ? _d : Object])
], AuthService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/auth/dto/auth.dto.ts"
/*!**********************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/auth/dto/auth.dto.ts ***!
  \**********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatedUserResponseDto = exports.OrgExistsResponseDto = exports.CreateUserDto = exports.ProfileResponseDto = exports.UserOrganizationResponseDto = exports.LogoutResponseDto = exports.AuthTokensResponseDto = exports.LoginDto = exports.SignupDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class SignupDto {
    email;
    password;
    fullName;
    organizationName;
}
exports.SignupDto = SignupDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'user@example.com',
        description: 'The email of the user',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SignupDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Password123!',
        description: 'The password (min 6 characters)',
        minLength: 6,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], SignupDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'John Doe',
        description: 'The full name of the user',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignupDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Klypto Corp',
        description: 'The name of the organization',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignupDto.prototype, "organizationName", void 0);
class LoginDto {
    email;
    password;
}
exports.LoginDto = LoginDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'user@example.com',
        description: 'The email of the user',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Password123!',
        description: 'The password of the user',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
class AuthTokensResponseDto {
    accessToken;
    refreshToken;
    roles;
    role;
    dashboardModules;
    access;
}
exports.AuthTokensResponseDto = AuthTokensResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.access-token',
        description: 'JWT access token',
    }),
    __metadata("design:type", String)
], AuthTokensResponseDto.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.refresh-token',
        description: 'JWT refresh token',
    }),
    __metadata("design:type", String)
], AuthTokensResponseDto.prototype, "refreshToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['SUPER_ADMIN'],
        required: false,
        description: 'Assigned role names for the user',
    }),
    __metadata("design:type", Array)
], AuthTokensResponseDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'SUPER_ADMIN',
        required: false,
        description: 'Single assigned role at signup bootstrap',
    }),
    __metadata("design:type", String)
], AuthTokensResponseDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['dashboard', 'hrms', 'leave'],
        required: false,
        description: 'Dashboard modules assigned through role access',
    }),
    __metadata("design:type", Array)
], AuthTokensResponseDto.prototype, "dashboardModules", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            isSuperAdmin: false,
            canManageUsers: true,
            canManageRbac: false,
            canViewDashboard: true,
            dashboardModules: ['dashboard', 'hrms', 'leave'],
        },
        required: false,
    }),
    __metadata("design:type", Object)
], AuthTokensResponseDto.prototype, "access", void 0);
class LogoutResponseDto {
    message;
}
exports.LogoutResponseDto = LogoutResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Logged out successfully',
    }),
    __metadata("design:type", String)
], LogoutResponseDto.prototype, "message", void 0);
class UserOrganizationResponseDto {
    id;
    name;
}
exports.UserOrganizationResponseDto = UserOrganizationResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'clxabc123org' }),
    __metadata("design:type", String)
], UserOrganizationResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Klypto Corp' }),
    __metadata("design:type", String)
], UserOrganizationResponseDto.prototype, "name", void 0);
class ProfileResponseDto {
    id;
    email;
    fullName;
    organization;
    roles;
    dashboardModules;
    access;
    isActive;
    createdAt;
}
exports.ProfileResponseDto = ProfileResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'clxabc123user' }),
    __metadata("design:type", String)
], ProfileResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@example.com' }),
    __metadata("design:type", String)
], ProfileResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe' }),
    __metadata("design:type", String)
], ProfileResponseDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: UserOrganizationResponseDto }),
    __metadata("design:type", UserOrganizationResponseDto)
], ProfileResponseDto.prototype, "organization", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['SUPER_ADMIN'] }),
    __metadata("design:type", Array)
], ProfileResponseDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['dashboard', 'hrms', 'leave'],
        description: 'Dashboard modules assigned through role access',
    }),
    __metadata("design:type", Array)
], ProfileResponseDto.prototype, "dashboardModules", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            isSuperAdmin: false,
            canManageUsers: true,
            canManageRbac: false,
            canViewDashboard: true,
            dashboardModules: ['dashboard', 'hrms', 'leave'],
        },
    }),
    __metadata("design:type", Object)
], ProfileResponseDto.prototype, "access", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], ProfileResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-04-09T06:30:00.000Z' }),
    __metadata("design:type", String)
], ProfileResponseDto.prototype, "createdAt", void 0);
class CreateUserDto {
    email;
    password;
    fullName;
    role;
    employeeCode;
    department;
    jobTitle;
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'jane.doe@company.com' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SecurePass123', minLength: 6 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Jane Doe' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'HR', enum: ['MANAGER', 'HR', 'EMPLOYEE'] }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'EMP-042' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "employeeCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Human Resources' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'HR Manager' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "jobTitle", void 0);
class OrgExistsResponseDto {
    exists;
}
exports.OrgExistsResponseDto = OrgExistsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], OrgExistsResponseDto.prototype, "exists", void 0);
class CreatedUserResponseDto {
    id;
    email;
    fullName;
    role;
    isActive;
    employeeCode;
}
exports.CreatedUserResponseDto = CreatedUserResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'clxabc123user' }),
    __metadata("design:type", String)
], CreatedUserResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'jane.doe@company.com' }),
    __metadata("design:type", String)
], CreatedUserResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Jane Doe' }),
    __metadata("design:type", String)
], CreatedUserResponseDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'HR' }),
    __metadata("design:type", String)
], CreatedUserResponseDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], CreatedUserResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'EMP-042' }),
    __metadata("design:type", String)
], CreatedUserResponseDto.prototype, "employeeCode", void 0);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts"
/*!***********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts ***!
  \***********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccessTokenGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let AccessTokenGuard = class AccessTokenGuard extends (0, passport_1.AuthGuard)('jwt') {
};
exports.AccessTokenGuard = AccessTokenGuard;
exports.AccessTokenGuard = AccessTokenGuard = __decorate([
    (0, common_1.Injectable)()
], AccessTokenGuard);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/auth/guards/refresh-token.guard.ts"
/*!************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/auth/guards/refresh-token.guard.ts ***!
  \************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let RefreshTokenGuard = class RefreshTokenGuard extends (0, passport_1.AuthGuard)('jwt-refresh') {
};
exports.RefreshTokenGuard = RefreshTokenGuard;
exports.RefreshTokenGuard = RefreshTokenGuard = __decorate([
    (0, common_1.Injectable)()
], RefreshTokenGuard);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/auth/roles/roles.decorator.ts"
/*!*******************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/auth/roles/roles.decorator.ts ***!
  \*******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = exports.ROLES_KEY = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.ROLES_KEY = 'roles';
const Roles = (...roles) => (0, common_1.SetMetadata)(exports.ROLES_KEY, roles);
exports.Roles = Roles;


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts"
/*!***************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts ***!
  \***************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const prisma_service_1 = __webpack_require__(/*! ../../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
const roles_decorator_1 = __webpack_require__(/*! ./roles.decorator */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.decorator.ts");
let RolesGuard = class RolesGuard {
    reflector;
    prisma;
    constructor(reflector, prisma) {
        this.reflector = reflector;
        this.prisma = prisma;
    }
    async canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(roles_decorator_1.ROLES_KEY, [context.getHandler(), context.getClass()]);
        if (!requiredRoles || requiredRoles.length === 0) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const userId = request.user?.sub;
        if (!userId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        const assignedRoles = await this.prisma.userRole.findMany({
            where: { userId },
            include: {
                role: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        const roleSet = new Set(assignedRoles.map((entry) => entry.role.name.toUpperCase()));
        return requiredRoles.some((role) => roleSet.has(role.toUpperCase()));
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object, typeof (_b = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _b : Object])
], RolesGuard);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/auth/roles/system-role.enum.ts"
/*!********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/auth/roles/system-role.enum.ts ***!
  \********************************************************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SystemRole = void 0;
var SystemRole;
(function (SystemRole) {
    SystemRole["SUPER_ADMIN"] = "SUPER_ADMIN";
    SystemRole["ADMIN"] = "ADMIN";
    SystemRole["MANAGER"] = "MANAGER";
    SystemRole["HR"] = "HR";
    SystemRole["EMPLOYEE"] = "EMPLOYEE";
})(SystemRole || (exports.SystemRole = SystemRole = {}));


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/auth/strategies/jwt.strategy.ts"
/*!*********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/auth/strategies/jwt.strategy.ts ***!
  \*********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenStrategy = exports.AccessTokenStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const users_service_1 = __webpack_require__(/*! ../../users/users.service */ "./apps/klypto-crm-nest-js/src/users/users.service.ts");
let AccessTokenStrategy = class AccessTokenStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt') {
    usersService;
    constructor(usersService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_ACCESS_SECRET || 'access-secret',
        });
        this.usersService = usersService;
    }
    async validate(payload) {
        const user = await this.usersService.findActiveStatusById(payload?.sub);
        if (!user || !user.isActive) {
            throw new common_1.UnauthorizedException('Your account has been deactivated. Contact your administrator.');
        }
        return payload;
    }
};
exports.AccessTokenStrategy = AccessTokenStrategy;
exports.AccessTokenStrategy = AccessTokenStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], AccessTokenStrategy);
let RefreshTokenStrategy = class RefreshTokenStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-refresh') {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_REFRESH_SECRET || 'refresh-secret',
            passReqToCallback: true,
        });
    }
    validate(req, payload) {
        const refreshToken = req.get('Authorization').replace('Bearer', '').trim();
        return { ...payload, refreshToken };
    }
};
exports.RefreshTokenStrategy = RefreshTokenStrategy;
exports.RefreshTokenStrategy = RefreshTokenStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], RefreshTokenStrategy);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/biometric/biometric.controller.ts"
/*!***********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/biometric/biometric.controller.ts ***!
  \***********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var BiometricController_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BiometricController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const biometric_service_1 = __webpack_require__(/*! ./biometric.service */ "./apps/klypto-crm-nest-js/src/biometric/biometric.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let BiometricController = BiometricController_1 = class BiometricController {
    biometricService;
    logger = new common_1.Logger(BiometricController_1.name);
    constructor(biometricService) {
        this.biometricService = biometricService;
    }
    handshake(query, sn) {
        this.logger.log(`HANDSHAKE DETECTED! Query params: ${JSON.stringify(query)}`);
        return `GET OPTION FROM: ${sn}\r\nStamp=0\r\nOpStamp=0\r\nErrorDelay=300\r\nDelay=60\r\nTransTimes=00:00;23:59\r\nTransInterval=5\r\nTransFlag=1111000000\r\nRealtime=0\r\nEncrypt=0`;
    }
    async receiveData(sn, table, req) {
        let rawData = '';
        req.setEncoding('utf8');
        for await (const chunk of req) {
            rawData += chunk;
        }
        this.logger.log(`DATA PUSH DETECTED! SN: ${sn}, Table: ${table}, Body size: ${rawData.length} bytes`);
        this.logger.log(`Raw Body Preview: ${rawData.substring(0, 100)}`);
        return this.biometricService.processIncomingData(sn, table, rawData);
    }
    getRequests(sn) {
        return this.biometricService.getRequests(sn);
    }
    deviceCmd(sn, body) {
        this.logger.log(`Received command result from ${sn}: ${JSON.stringify(body)}`);
        return 'OK';
    }
};
exports.BiometricController = BiometricController;
__decorate([
    (0, common_1.Get)(['cdata', 'cdata.aspx', 'cdata.php', 'cdata.dll']),
    (0, common_1.Header)('Content-Type', 'text/plain'),
    (0, swagger_1.ApiOperation)({ summary: 'ADMS Options Handshake' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('SN')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], BiometricController.prototype, "handshake", null);
__decorate([
    (0, common_1.Post)(['cdata', 'cdata.aspx', 'cdata.php', 'cdata.dll']),
    (0, common_1.Header)('Content-Type', 'text/plain'),
    (0, swagger_1.ApiOperation)({ summary: 'Receive Biometric Data (ATTLOG)' }),
    __param(0, (0, common_1.Query)('SN')),
    __param(1, (0, common_1.Query)('table')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], BiometricController.prototype, "receiveData", null);
__decorate([
    (0, common_1.Get)(['getrequest', 'getrequest.aspx', 'getrequest.php', 'getrequest.dll']),
    (0, swagger_1.ApiOperation)({ summary: 'Command Polling' }),
    __param(0, (0, common_1.Query)('SN')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BiometricController.prototype, "getRequests", null);
__decorate([
    (0, common_1.Post)('devicecmd'),
    (0, swagger_1.ApiOperation)({ summary: 'Device Command Response' }),
    __param(0, (0, common_1.Query)('SN')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BiometricController.prototype, "deviceCmd", null);
exports.BiometricController = BiometricController = BiometricController_1 = __decorate([
    (0, swagger_1.ApiTags)('Biometric'),
    (0, common_1.Controller)('iclock'),
    __metadata("design:paramtypes", [typeof (_a = typeof biometric_service_1.BiometricService !== "undefined" && biometric_service_1.BiometricService) === "function" ? _a : Object])
], BiometricController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/biometric/biometric.module.ts"
/*!*******************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/biometric/biometric.module.ts ***!
  \*******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BiometricModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const biometric_controller_1 = __webpack_require__(/*! ./biometric.controller */ "./apps/klypto-crm-nest-js/src/biometric/biometric.controller.ts");
const biometric_service_1 = __webpack_require__(/*! ./biometric.service */ "./apps/klypto-crm-nest-js/src/biometric/biometric.service.ts");
const attendance_module_1 = __webpack_require__(/*! ../attendance/attendance.module */ "./apps/klypto-crm-nest-js/src/attendance/attendance.module.ts");
let BiometricModule = class BiometricModule {
};
exports.BiometricModule = BiometricModule;
exports.BiometricModule = BiometricModule = __decorate([
    (0, common_1.Module)({
        imports: [attendance_module_1.AttendanceModule],
        controllers: [biometric_controller_1.BiometricController],
        providers: [biometric_service_1.BiometricService],
    })
], BiometricModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/biometric/biometric.service.ts"
/*!********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/biometric/biometric.service.ts ***!
  \********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BiometricService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BiometricService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
const attendance_service_1 = __webpack_require__(/*! ../attendance/attendance.service */ "./apps/klypto-crm-nest-js/src/attendance/attendance.service.ts");
let BiometricService = BiometricService_1 = class BiometricService {
    prisma;
    attendanceService;
    logger = new common_1.Logger(BiometricService_1.name);
    constructor(prisma, attendanceService) {
        this.prisma = prisma;
        this.attendanceService = attendanceService;
    }
    async processIncomingData(deviceSn, table, rawData) {
        if (table !== 'ATTLOG') {
            this.logger.log(`Received non-ATTLOG data for table: ${table}. Skipping processing.`);
            return 'OK';
        }
        const lines = rawData.trim().split(/\r?\n/);
        this.logger.log(`Processing ${lines.length} log entries from device ${deviceSn}`);
        for (const line of lines) {
            if (!line.trim())
                continue;
            const [userId, timestampStr, status] = line.split('\t');
            if (timestampStr && timestampStr < '2026-04-23') {
                continue;
            }
            try {
                const punchTime = new Date(timestampStr.replace(' ', 'T') + '+05:30');
                const existingLog = await this.prisma.biometricLog.findFirst({
                    where: { empCode: userId, punchTime },
                });
                if (existingLog) {
                    continue;
                }
                await this.prisma.biometricLog.create({
                    data: {
                        deviceSn,
                        empCode: userId,
                        punchTime,
                        punchType: status,
                        rawLog: line,
                    },
                });
                const employee = await this.prisma.employee.findUnique({
                    where: { code: userId },
                });
                if (!employee) {
                    continue;
                }
                const attendanceDto = {
                    employeeId: employee.id,
                    date: punchTime.toISOString().split('T')[0],
                    status: 'Present',
                    checkIn: punchTime.toISOString(),
                    checkOut: punchTime.toISOString(),
                };
                await this.attendanceService.create(employee.organizationId, attendanceDto);
                this.logger.log(`Processed attendance for ${employee.name} (${userId}) at ${timestampStr}`);
            }
            catch (error) {
                const stack = error instanceof Error ? error.stack : undefined;
                this.logger.error(`Error processing line: ${line}`, stack);
            }
        }
        return 'OK';
    }
    getRequests(deviceSn) {
        this.logger.log(`Command poll from device ${deviceSn}`);
        return 'OK';
    }
};
exports.BiometricService = BiometricService;
exports.BiometricService = BiometricService = BiometricService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof attendance_service_1.AttendanceService !== "undefined" && attendance_service_1.AttendanceService) === "function" ? _b : Object])
], BiometricService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/common/cors-origin.util.ts"
/*!****************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/common/cors-origin.util.ts ***!
  \****************************************************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isOriginAllowed = isOriginAllowed;
const LOCAL_DEV_ORIGIN_PATTERN = /^https?:\/\/(localhost|127\.0\.0\.1|192\.168\.\d{1,3}\.\d{1,3}|10\.\d{1,3}\.\d{1,3}\.\d{1,3}|172\.(1[6-9]|2\d|3[0-1])\.\d{1,3}\.\d{1,3}|.*\.trycloudflare\.com)(:\d+)?$/;
function isOriginAllowed(origin) {
    if (!origin)
        return true;
    const corsOrigins = (process.env.CORS_ORIGIN || 'http://localhost:5173')
        .split(',')
        .map((entry) => entry.trim())
        .filter(Boolean);
    if (corsOrigins.includes('*') || corsOrigins.includes(origin)) {
        return true;
    }
    const isProduction = process.env.NODE_ENV === 'production';
    return !isProduction && LOCAL_DEV_ORIGIN_PATTERN.test(origin);
}


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/common/filters/prisma-exception.filter.ts"
/*!*******************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/common/filters/prisma-exception.filter.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaExceptionFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let PrismaExceptionFilter = class PrismaExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const code = exception.code;
        let status = common_1.HttpStatus.BAD_REQUEST;
        let message = 'Database request failed';
        const normalizeFieldLabel = (value) => {
            const raw = value || '';
            if (raw.includes('Branch_headId_fkey')) {
                return 'selected branch head';
            }
            if (raw.includes('Department_headId_fkey')) {
                return 'selected department head';
            }
            if (raw.includes('FinancialTransaction_partnerId_fkey')) {
                return 'linked financial transactions';
            }
            if (raw.includes('AttendanceRecord_employeeId_fkey')) {
                return 'linked attendance records';
            }
            return raw;
        };
        if (code === 'P2002') {
            const fields = Array.isArray(exception.meta?.target)
                ? exception.meta?.target.join(', ')
                : 'unique field';
            message = `${fields} already exists. Please use a different value.`;
        }
        else if (code === 'P2003') {
            const field = normalizeFieldLabel(String(exception.meta?.field_name || 'related data'));
            message = `Cannot complete action because ${field} is invalid or still linked.`;
        }
        else if (code === 'P2025') {
            status = common_1.HttpStatus.NOT_FOUND;
            message = 'Requested record does not exist';
        }
        response.status(status).json({
            statusCode: status,
            message,
            code,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
};
exports.PrismaExceptionFilter = PrismaExceptionFilter;
exports.PrismaExceptionFilter = PrismaExceptionFilter = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientKnownRequestError)
], PrismaExceptionFilter);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/common/upload/upload.controller.ts"
/*!************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/common/upload/upload.controller.ts ***!
  \************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const multer_1 = __webpack_require__(/*! multer */ "multer");
const path_1 = __webpack_require__(/*! path */ "path");
const access_token_guard_1 = __webpack_require__(/*! ../../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
let UploadController = class UploadController {
    uploadFile(file) {
        if (!file) {
            throw new common_1.BadRequestException('File is required');
        }
        const host = process.env.HOST_URL || 'http://localhost:3000';
        return {
            url: `${host}/uploads/${file.filename}`,
            filename: file.filename,
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: file.size,
        };
    }
};
exports.UploadController = UploadController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Upload a single file' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                cb(null, `${uniqueSuffix}${(0, path_1.extname)(file.originalname)}`);
            },
        }),
        fileFilter: (req, file, cb) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/)) {
                return cb(new common_1.BadRequestException('Only image and PDF files are allowed!'), false);
            }
            cb(null, true);
        },
        limits: {
            fileSize: 5 * 1024 * 1024,
        },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "uploadFile", null);
exports.UploadController = UploadController = __decorate([
    (0, swagger_1.ApiTags)('Upload'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, common_1.Controller)('upload')
], UploadController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/common/upload/upload.module.ts"
/*!********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/common/upload/upload.module.ts ***!
  \********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const upload_controller_1 = __webpack_require__(/*! ./upload.controller */ "./apps/klypto-crm-nest-js/src/common/upload/upload.controller.ts");
let UploadModule = class UploadModule {
};
exports.UploadModule = UploadModule;
exports.UploadModule = UploadModule = __decorate([
    (0, common_1.Module)({
        controllers: [upload_controller_1.UploadController],
    })
], UploadModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/crm-overview/crm-overview.controller.ts"
/*!*****************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/crm-overview/crm-overview.controller.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CrmOverviewController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const crm_overview_service_1 = __webpack_require__(/*! ./crm-overview.service */ "./apps/klypto-crm-nest-js/src/crm-overview/crm-overview.service.ts");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
let CrmOverviewController = class CrmOverviewController {
    crmOverviewService;
    constructor(crmOverviewService) {
        this.crmOverviewService = crmOverviewService;
    }
    async getStats(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.crmOverviewService.getOrganizationId(req.user.sub);
        return this.crmOverviewService.getStats(orgId);
    }
    async getRecentLeads(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.crmOverviewService.getOrganizationId(req.user.sub);
        return this.crmOverviewService.getRecentLeads(orgId);
    }
};
exports.CrmOverviewController = CrmOverviewController;
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get aggregated CRM statistics' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CrmOverviewController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)('recent'),
    (0, swagger_1.ApiOperation)({ summary: 'Get recent leads' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CrmOverviewController.prototype, "getRecentLeads", null);
exports.CrmOverviewController = CrmOverviewController = __decorate([
    (0, swagger_1.ApiTags)('CRM Overview'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('crm-overview'),
    __metadata("design:paramtypes", [typeof (_a = typeof crm_overview_service_1.CrmOverviewService !== "undefined" && crm_overview_service_1.CrmOverviewService) === "function" ? _a : Object])
], CrmOverviewController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/crm-overview/crm-overview.module.ts"
/*!*************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/crm-overview/crm-overview.module.ts ***!
  \*************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CrmOverviewModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const crm_overview_service_1 = __webpack_require__(/*! ./crm-overview.service */ "./apps/klypto-crm-nest-js/src/crm-overview/crm-overview.service.ts");
const crm_overview_controller_1 = __webpack_require__(/*! ./crm-overview.controller */ "./apps/klypto-crm-nest-js/src/crm-overview/crm-overview.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
let CrmOverviewModule = class CrmOverviewModule {
};
exports.CrmOverviewModule = CrmOverviewModule;
exports.CrmOverviewModule = CrmOverviewModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [crm_overview_controller_1.CrmOverviewController],
        providers: [crm_overview_service_1.CrmOverviewService],
        exports: [crm_overview_service_1.CrmOverviewService],
    })
], CrmOverviewModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/crm-overview/crm-overview.service.ts"
/*!**************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/crm-overview/crm-overview.service.ts ***!
  \**************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CrmOverviewService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let CrmOverviewService = class CrmOverviewService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrganizationId(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { organizationId: true },
        });
        if (!user || !user.organizationId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return user.organizationId;
    }
    async getStats(organizationId) {
        const [totalLeads, activeDeals, totalValue, wonLeads] = await Promise.all([
            this.prisma.lead.count({ where: { organizationId } }),
            this.prisma.lead.count({
                where: {
                    organizationId,
                    status: { in: ['Discovery', 'Proposal', 'Negotiation'] },
                },
            }),
            this.prisma.lead.aggregate({
                where: { organizationId },
                _sum: { value: true },
            }),
            this.prisma.lead.count({ where: { organizationId, status: 'Won' } }),
        ]);
        const conversionRate = totalLeads > 0 ? (wonLeads / totalLeads) * 100 : 0;
        return {
            totalLeads,
            activeDeals,
            totalRevenue: `$${(totalValue._sum.value || 0).toLocaleString()}`,
            conversionRate: `${conversionRate.toFixed(1)}%`,
        };
    }
    async getRecentLeads(organizationId) {
        return this.prisma.lead.findMany({
            where: { organizationId },
            orderBy: { createdAt: 'desc' },
            take: 5,
            select: {
                id: true,
                name: true,
                company: true,
                value: true,
                status: true,
                createdAt: true,
            },
        });
    }
};
exports.CrmOverviewService = CrmOverviewService;
exports.CrmOverviewService = CrmOverviewService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], CrmOverviewService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/employees/dto/employee.dto.ts"
/*!*******************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/employees/dto/employee.dto.ts ***!
  \*******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmployeeResponseDto = exports.UpdateEmployeeDto = exports.CreateEmployeeDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateEmployeeDto {
    name;
    code;
    role;
    department;
    departmentId;
    branchId;
    status;
    userId;
    organizationId;
}
exports.CreateEmployeeDto = CreateEmployeeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'John Doe',
        description: 'Full name of the employee',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'EMP-001', description: 'Unique employee code' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'HR Manager', description: 'Role or job title' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'People Ops', description: 'Department name' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'clxyz...',
        description: 'Department entity ID for hierarchy mapping',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "departmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'clxyz...',
        description: 'Branch entity ID for hierarchy mapping',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "branchId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Active',
        description: 'Status of the employee (e.g. Active, Onboarding, Inactive)',
        required: false,
        default: 'Active',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'clxyz...',
        description: 'ID of the system user if employee has an account',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'clxyz...', description: 'Organization ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "organizationId", void 0);
class UpdateEmployeeDto extends (0, swagger_1.PartialType)(CreateEmployeeDto) {
}
exports.UpdateEmployeeDto = UpdateEmployeeDto;
class EmployeeResponseDto {
    id;
    name;
    code;
    role;
    department;
    departmentId;
    branchId;
    status;
    organizationId;
    createdAt;
    updatedAt;
}
exports.EmployeeResponseDto = EmployeeResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'clxyz...' }),
    __metadata("design:type", String)
], EmployeeResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe' }),
    __metadata("design:type", String)
], EmployeeResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'EMP-001' }),
    __metadata("design:type", String)
], EmployeeResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'HR Manager' }),
    __metadata("design:type", String)
], EmployeeResponseDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'People Ops' }),
    __metadata("design:type", String)
], EmployeeResponseDto.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'clxyz...', required: false }),
    __metadata("design:type", String)
], EmployeeResponseDto.prototype, "departmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'clxyz...', required: false }),
    __metadata("design:type", String)
], EmployeeResponseDto.prototype, "branchId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Active' }),
    __metadata("design:type", String)
], EmployeeResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'clxyz...' }),
    __metadata("design:type", String)
], EmployeeResponseDto.prototype, "organizationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-04-10T00:00:00.000Z' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], EmployeeResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-04-10T00:00:00.000Z' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], EmployeeResponseDto.prototype, "updatedAt", void 0);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/employees/dto/resignation.dto.ts"
/*!**********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/employees/dto/resignation.dto.ts ***!
  \**********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateResignationStatusDto = exports.CreateResignationDto = exports.FNFStatus = exports.ResignationStatus = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
var ResignationStatus;
(function (ResignationStatus) {
    ResignationStatus["PENDING"] = "Pending";
    ResignationStatus["APPROVED"] = "Approved";
    ResignationStatus["REJECTED"] = "Rejected";
    ResignationStatus["WITHDRAWN"] = "Withdrawn";
})(ResignationStatus || (exports.ResignationStatus = ResignationStatus = {}));
var FNFStatus;
(function (FNFStatus) {
    FNFStatus["PENDING"] = "Pending";
    FNFStatus["IN_PROGRESS"] = "In Progress";
    FNFStatus["SETTLED"] = "Settled";
})(FNFStatus || (exports.FNFStatus = FNFStatus = {}));
class CreateResignationDto {
    proposedLastWorkingDay;
    noticePeriod = 30;
    reason;
    handoverPlan;
    companyAssetsHandover = false;
    employeeId;
}
exports.CreateResignationDto = CreateResignationDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2026-05-24T10:00:00Z',
        description: 'Proposed last working day',
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateResignationDto.prototype, "proposedLastWorkingDay", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 30, description: 'Notice period in days' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateResignationDto.prototype, "noticePeriod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Found a better opportunity',
        description: 'Reason for resignation',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateResignationDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Handed over all projects to John',
        description: 'Handover plan',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateResignationDto.prototype, "handoverPlan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: false,
        description: 'Whether company assets were handed over',
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateResignationDto.prototype, "companyAssetsHandover", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'cuid_employee_id', description: 'Employee ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateResignationDto.prototype, "employeeId", void 0);
class UpdateResignationStatusDto {
    status;
    fnfStatus;
    companyAssetsHandover;
}
exports.UpdateResignationStatusDto = UpdateResignationStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ResignationStatus, example: ResignationStatus.APPROVED }),
    (0, class_validator_1.IsEnum)(ResignationStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateResignationStatusDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: FNFStatus, example: FNFStatus.IN_PROGRESS }),
    (0, class_validator_1.IsEnum)(FNFStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateResignationStatusDto.prototype, "fnfStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: true,
        description: 'Whether company assets were handed over',
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateResignationStatusDto.prototype, "companyAssetsHandover", void 0);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/employees/employees.controller.ts"
/*!***********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/employees/employees.controller.ts ***!
  \***********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmployeesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const employees_service_1 = __webpack_require__(/*! ./employees.service */ "./apps/klypto-crm-nest-js/src/employees/employees.service.ts");
const employee_dto_1 = __webpack_require__(/*! ./dto/employee.dto */ "./apps/klypto-crm-nest-js/src/employees/dto/employee.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
let EmployeesController = class EmployeesController {
    employeesService;
    constructor(employeesService) {
        this.employeesService = employeesService;
    }
    async create(req, createEmployeeDto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.employeesService.getOrganizationId(req.user.sub);
        return this.employeesService.create(orgId, createEmployeeDto);
    }
    async findAll(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.employeesService.getOrganizationId(req.user.sub);
        return this.employeesService.findAll(orgId);
    }
    async findOne(req, id) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.employeesService.getOrganizationId(req.user.sub);
        return this.employeesService.findOne(orgId, id);
    }
    async update(req, id, updateEmployeeDto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.employeesService.getOrganizationId(req.user.sub);
        return this.employeesService.update(orgId, id, updateEmployeeDto);
    }
    async remove(req, id) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.employeesService.getOrganizationId(req.user.sub);
        return this.employeesService.remove(orgId, id);
    }
};
exports.EmployeesController = EmployeesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new employee' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The employee has been successfully created.',
        type: employee_dto_1.EmployeeResponseDto,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof employee_dto_1.CreateEmployeeDto !== "undefined" && employee_dto_1.CreateEmployeeDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all employees in the organization' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'List of employees',
        type: [employee_dto_1.EmployeeResponseDto],
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific employee by ID' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The employee details',
        type: employee_dto_1.EmployeeResponseDto,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an employee' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The employee has been successfully updated.',
        type: employee_dto_1.EmployeeResponseDto,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_c = typeof employee_dto_1.UpdateEmployeeDto !== "undefined" && employee_dto_1.UpdateEmployeeDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an employee' }),
    (0, swagger_1.ApiOkResponse)({ description: 'The employee has been deleted successfully.' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "remove", null);
exports.EmployeesController = EmployeesController = __decorate([
    (0, swagger_1.ApiTags)('Employees'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('employees'),
    __metadata("design:paramtypes", [typeof (_a = typeof employees_service_1.EmployeesService !== "undefined" && employees_service_1.EmployeesService) === "function" ? _a : Object])
], EmployeesController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/employees/employees.module.ts"
/*!*******************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/employees/employees.module.ts ***!
  \*******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmployeesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const employees_service_1 = __webpack_require__(/*! ./employees.service */ "./apps/klypto-crm-nest-js/src/employees/employees.service.ts");
const employees_controller_1 = __webpack_require__(/*! ./employees.controller */ "./apps/klypto-crm-nest-js/src/employees/employees.controller.ts");
const resignation_controller_1 = __webpack_require__(/*! ./resignation.controller */ "./apps/klypto-crm-nest-js/src/employees/resignation.controller.ts");
const resignation_service_1 = __webpack_require__(/*! ./resignation.service */ "./apps/klypto-crm-nest-js/src/employees/resignation.service.ts");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
let EmployeesModule = class EmployeesModule {
};
exports.EmployeesModule = EmployeesModule;
exports.EmployeesModule = EmployeesModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [employees_controller_1.EmployeesController, resignation_controller_1.ResignationController],
        providers: [employees_service_1.EmployeesService, resignation_service_1.ResignationService],
    })
], EmployeesModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/employees/employees.service.ts"
/*!********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/employees/employees.service.ts ***!
  \********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmployeesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let EmployeesService = class EmployeesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrganizationId(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { organizationId: true },
        });
        if (!user || !user.organizationId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return user.organizationId;
    }
    async create(organizationId, dto) {
        const existing = await this.prisma.employee.findUnique({
            where: { code: dto.code },
        });
        if (existing) {
            throw new common_1.ConflictException(`Employee with code ${dto.code} already exists`);
        }
        return this.prisma.employee.create({
            data: {
                name: dto.name,
                code: dto.code,
                role: dto.role,
                department: dto.department,
                ...(dto.departmentId?.trim()
                    ? { dept: { connect: { id: dto.departmentId } } }
                    : {}),
                ...(dto.branchId?.trim()
                    ? { branch: { connect: { id: dto.branchId } } }
                    : {}),
                status: dto.status || 'Active',
                organization: { connect: { id: organizationId } },
                ...(dto.userId && { user: { connect: { id: dto.userId } } }),
            },
        });
    }
    async findAll(organizationId) {
        return this.prisma.employee.findMany({
            where: { organizationId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(organizationId, id) {
        const employee = await this.prisma.employee.findFirst({
            where: { id, organizationId },
        });
        if (!employee) {
            throw new common_1.NotFoundException(`Employee with ID ${id} not found`);
        }
        return employee;
    }
    async update(organizationId, id, dto) {
        const employee = await this.findOne(organizationId, id);
        if (dto.code && dto.code !== employee.code) {
            const existing = await this.prisma.employee.findUnique({
                where: { code: dto.code },
            });
            if (existing) {
                throw new common_1.ConflictException(`Employee with code ${dto.code} already exists`);
            }
        }
        return this.prisma.employee.update({
            where: { id },
            data: {
                name: dto.name,
                code: dto.code,
                role: dto.role,
                department: dto.department,
                ...(dto.departmentId !== undefined
                    ? {
                        dept: dto.departmentId?.trim()
                            ? { connect: { id: dto.departmentId } }
                            : { disconnect: true },
                    }
                    : {}),
                ...(dto.branchId !== undefined
                    ? {
                        branch: dto.branchId?.trim()
                            ? { connect: { id: dto.branchId } }
                            : { disconnect: true },
                    }
                    : {}),
                status: dto.status,
                ...(dto.userId && { user: { connect: { id: dto.userId } } }),
            },
        });
    }
    async remove(organizationId, id) {
        await this.findOne(organizationId, id);
        await this.prisma.$transaction([
            this.prisma.attendanceRecord.deleteMany({
                where: { organizationId, employeeId: id },
            }),
            this.prisma.leaveRequest.deleteMany({
                where: { organizationId, employeeId: id },
            }),
            this.prisma.salaryStructure.deleteMany({
                where: { organizationId, employeeId: id },
            }),
            this.prisma.payrollRecord.deleteMany({
                where: { organizationId, employeeId: id },
            }),
            this.prisma.performanceReview.deleteMany({
                where: { organizationId, employeeId: id },
            }),
            this.prisma.grievance.updateMany({
                where: { organizationId, employeeId: id },
                data: { employeeId: null },
            }),
            this.prisma.asset.updateMany({
                where: { organizationId, employeeId: id },
                data: { employeeId: null },
            }),
            this.prisma.branch.updateMany({
                where: { organizationId, headId: id },
                data: { headId: null },
            }),
            this.prisma.department.updateMany({
                where: { organizationId, headId: id },
                data: { headId: null },
            }),
            this.prisma.employee.delete({
                where: { id },
            }),
        ]);
        return { message: 'Employee deleted successfully' };
    }
};
exports.EmployeesService = EmployeesService;
exports.EmployeesService = EmployeesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], EmployeesService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/employees/resignation.controller.ts"
/*!*************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/employees/resignation.controller.ts ***!
  \*************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResignationController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const resignation_service_1 = __webpack_require__(/*! ./resignation.service */ "./apps/klypto-crm-nest-js/src/employees/resignation.service.ts");
const resignation_dto_1 = __webpack_require__(/*! ./dto/resignation.dto */ "./apps/klypto-crm-nest-js/src/employees/dto/resignation.dto.ts");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
let ResignationController = class ResignationController {
    resignationService;
    constructor(resignationService) {
        this.resignationService = resignationService;
    }
    async create(req, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.resignationService.getOrganizationId(req.user.sub);
        return this.resignationService.create(orgId, dto);
    }
    async findAll(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.resignationService.getOrganizationId(req.user.sub);
        return this.resignationService.findAll(orgId);
    }
    async findOne(req, id) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.resignationService.getOrganizationId(req.user.sub);
        return this.resignationService.findOne(orgId, id);
    }
    async updateStatus(req, id, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.resignationService.getOrganizationId(req.user.sub);
        return this.resignationService.updateStatus(orgId, id, dto);
    }
};
exports.ResignationController = ResignationController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Submit a resignation request' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof resignation_dto_1.CreateResignationDto !== "undefined" && resignation_dto_1.CreateResignationDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ResignationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List all resignation requests' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ResignationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get resignation details' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ResignationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Update resignation status (Approval/FNF)' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_c = typeof resignation_dto_1.UpdateResignationStatusDto !== "undefined" && resignation_dto_1.UpdateResignationStatusDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ResignationController.prototype, "updateStatus", null);
exports.ResignationController = ResignationController = __decorate([
    (0, swagger_1.ApiTags)('Resignations'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('hr-resignations'),
    __metadata("design:paramtypes", [typeof (_a = typeof resignation_service_1.ResignationService !== "undefined" && resignation_service_1.ResignationService) === "function" ? _a : Object])
], ResignationController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/employees/resignation.service.ts"
/*!**********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/employees/resignation.service.ts ***!
  \**********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResignationService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let ResignationService = class ResignationService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrganizationId(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { organizationId: true },
        });
        if (!user || !user.organizationId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return user.organizationId;
    }
    async create(organizationId, dto) {
        const existing = await this.prisma.resignation.findUnique({
            where: { employeeId: dto.employeeId },
        });
        if (existing &&
            existing.status !== 'Withdrawn' &&
            existing.status !== 'Rejected') {
            throw new common_1.ConflictException('A resignation request is already active for this employee.');
        }
        return this.prisma.resignation.upsert({
            where: { employeeId: dto.employeeId },
            update: {
                ...dto,
                organizationId,
                status: 'Pending',
                fnfStatus: 'Pending',
                submissionDate: new Date(),
                proposedLastWorkingDay: new Date(dto.proposedLastWorkingDay),
            },
            create: {
                ...dto,
                organizationId,
                proposedLastWorkingDay: new Date(dto.proposedLastWorkingDay),
            },
            include: { employee: { select: { name: true, code: true } } },
        });
    }
    async findAll(organizationId) {
        return this.prisma.resignation.findMany({
            where: { organizationId },
            include: {
                employee: {
                    select: { name: true, code: true, department: true, role: true },
                },
            },
            orderBy: { submissionDate: 'desc' },
        });
    }
    async findOne(organizationId, id) {
        const resignation = await this.prisma.resignation.findFirst({
            where: { id, organizationId },
            include: { employee: { select: { name: true, code: true } } },
        });
        if (!resignation)
            throw new common_1.NotFoundException('Resignation request not found');
        return resignation;
    }
    async updateStatus(organizationId, id, dto) {
        await this.findOne(organizationId, id);
        const updated = await this.prisma.resignation.update({
            where: { id },
            data: {
                ...(dto.status && { status: dto.status }),
                ...(dto.fnfStatus && { fnfStatus: dto.fnfStatus }),
                ...(dto.companyAssetsHandover !== undefined && {
                    companyAssetsHandover: dto.companyAssetsHandover,
                }),
            },
        });
        return updated;
    }
};
exports.ResignationService = ResignationService;
exports.ResignationService = ResignationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], ResignationService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/entities/dto/entities.dto.ts"
/*!******************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/entities/dto/entities.dto.ts ***!
  \******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateDepartmentDto = exports.CreateDepartmentDto = exports.UpdateBranchDto = exports.CreateBranchDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateBranchDto {
    name;
    type;
    headId;
}
exports.CreateBranchDto = CreateBranchDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'HQ - San Francisco' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBranchDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Main', enum: ['Main', 'Branch', 'International'] }),
    (0, class_validator_1.IsEnum)(['Main', 'Branch', 'International']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateBranchDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'clx...id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateBranchDto.prototype, "headId", void 0);
class UpdateBranchDto extends (0, swagger_1.PartialType)(CreateBranchDto) {
}
exports.UpdateBranchDto = UpdateBranchDto;
class CreateDepartmentDto {
    name;
    branchId;
    headId;
}
exports.CreateDepartmentDto = CreateDepartmentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Engineering' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateDepartmentDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'clx...id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateDepartmentDto.prototype, "branchId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'clx...id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDepartmentDto.prototype, "headId", void 0);
class UpdateDepartmentDto extends (0, swagger_1.PartialType)(CreateDepartmentDto) {
}
exports.UpdateDepartmentDto = UpdateDepartmentDto;


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/entities/entities.controller.ts"
/*!*********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/entities/entities.controller.ts ***!
  \*********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntitiesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const entities_service_1 = __webpack_require__(/*! ./entities.service */ "./apps/klypto-crm-nest-js/src/entities/entities.service.ts");
const entities_dto_1 = __webpack_require__(/*! ./dto/entities.dto */ "./apps/klypto-crm-nest-js/src/entities/dto/entities.dto.ts");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
let EntitiesController = class EntitiesController {
    entitiesService;
    constructor(entitiesService) {
        this.entitiesService = entitiesService;
    }
    async findAllBranches(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.entitiesService.getOrganizationId(req.user.sub);
        return this.entitiesService.findAllBranches(orgId);
    }
    async createBranch(req, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.entitiesService.getOrganizationId(req.user.sub);
        return this.entitiesService.createBranch(orgId, dto);
    }
    async updateBranch(req, id, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.entitiesService.getOrganizationId(req.user.sub);
        return this.entitiesService.updateBranch(orgId, id, dto);
    }
    async removeBranch(req, id) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.entitiesService.getOrganizationId(req.user.sub);
        return this.entitiesService.deleteBranch(orgId, id);
    }
    async findAllDepartments(req, branchId) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.entitiesService.getOrganizationId(req.user.sub);
        return this.entitiesService.findAllDepartments(orgId, branchId);
    }
    async createDepartment(req, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.entitiesService.getOrganizationId(req.user.sub);
        return this.entitiesService.createDepartment(orgId, dto);
    }
    async updateDepartment(req, id, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.entitiesService.getOrganizationId(req.user.sub);
        return this.entitiesService.updateDepartment(orgId, id, dto);
    }
    async removeDepartment(req, id) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.entitiesService.getOrganizationId(req.user.sub);
        return this.entitiesService.deleteDepartment(orgId, id);
    }
    async getStats(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.entitiesService.getOrganizationId(req.user.sub);
        return this.entitiesService.getStats(orgId);
    }
};
exports.EntitiesController = EntitiesController;
__decorate([
    (0, common_1.Get)('branches'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all branches' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EntitiesController.prototype, "findAllBranches", null);
__decorate([
    (0, common_1.Post)('branches'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new branch' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof entities_dto_1.CreateBranchDto !== "undefined" && entities_dto_1.CreateBranchDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], EntitiesController.prototype, "createBranch", null);
__decorate([
    (0, common_1.Patch)('branches/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a branch' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_c = typeof entities_dto_1.UpdateBranchDto !== "undefined" && entities_dto_1.UpdateBranchDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], EntitiesController.prototype, "updateBranch", null);
__decorate([
    (0, common_1.Delete)('branches/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a branch' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EntitiesController.prototype, "removeBranch", null);
__decorate([
    (0, common_1.Get)('departments'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all departments' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('branchId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EntitiesController.prototype, "findAllDepartments", null);
__decorate([
    (0, common_1.Post)('departments'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new department' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_d = typeof entities_dto_1.CreateDepartmentDto !== "undefined" && entities_dto_1.CreateDepartmentDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], EntitiesController.prototype, "createDepartment", null);
__decorate([
    (0, common_1.Patch)('departments/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a department' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_e = typeof entities_dto_1.UpdateDepartmentDto !== "undefined" && entities_dto_1.UpdateDepartmentDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], EntitiesController.prototype, "updateDepartment", null);
__decorate([
    (0, common_1.Delete)('departments/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a department' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EntitiesController.prototype, "removeDepartment", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get organizational statistics' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EntitiesController.prototype, "getStats", null);
exports.EntitiesController = EntitiesController = __decorate([
    (0, swagger_1.ApiTags)('Entities'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('entities'),
    __metadata("design:paramtypes", [typeof (_a = typeof entities_service_1.EntitiesService !== "undefined" && entities_service_1.EntitiesService) === "function" ? _a : Object])
], EntitiesController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/entities/entities.module.ts"
/*!*****************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/entities/entities.module.ts ***!
  \*****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntitiesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const entities_service_1 = __webpack_require__(/*! ./entities.service */ "./apps/klypto-crm-nest-js/src/entities/entities.service.ts");
const entities_controller_1 = __webpack_require__(/*! ./entities.controller */ "./apps/klypto-crm-nest-js/src/entities/entities.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
let EntitiesModule = class EntitiesModule {
};
exports.EntitiesModule = EntitiesModule;
exports.EntitiesModule = EntitiesModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [entities_controller_1.EntitiesController],
        providers: [entities_service_1.EntitiesService],
        exports: [entities_service_1.EntitiesService],
    })
], EntitiesModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/entities/entities.service.ts"
/*!******************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/entities/entities.service.ts ***!
  \******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntitiesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let EntitiesService = class EntitiesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrganizationId(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { organizationId: true },
        });
        if (!user || !user.organizationId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return user.organizationId;
    }
    async findAllBranches(organizationId) {
        return this.prisma.branch.findMany({
            where: { organizationId },
            include: {
                head: { select: { id: true, name: true } },
                _count: { select: { departments: true, employees: true } },
            },
            orderBy: { name: 'asc' },
        });
    }
    async createBranch(organizationId, dto) {
        return this.prisma.branch.create({
            data: {
                ...dto,
                organizationId,
                headId: dto.headId?.trim() ? dto.headId : undefined,
            },
        });
    }
    async updateBranch(organizationId, id, dto) {
        const branch = await this.prisma.branch.findFirst({
            where: { id, organizationId },
        });
        if (!branch)
            throw new common_1.NotFoundException('Branch not found');
        return this.prisma.branch.update({
            where: { id },
            data: {
                ...dto,
                ...(dto.headId !== undefined
                    ? { headId: dto.headId?.trim() ? dto.headId : null }
                    : {}),
            },
        });
    }
    async deleteBranch(organizationId, id) {
        const branch = await this.prisma.branch.findFirst({
            where: { id, organizationId },
        });
        if (!branch)
            throw new common_1.NotFoundException('Branch not found');
        return this.prisma.branch.delete({ where: { id } });
    }
    async findAllDepartments(organizationId, branchId) {
        return this.prisma.department.findMany({
            where: {
                organizationId,
                ...(branchId && { branchId }),
            },
            include: {
                head: { select: { id: true, name: true } },
                branch: { select: { name: true } },
                _count: { select: { employees: true } },
            },
            orderBy: { name: 'asc' },
        });
    }
    async createDepartment(organizationId, dto) {
        return this.prisma.department.create({
            data: {
                ...dto,
                organizationId,
                headId: dto.headId?.trim() ? dto.headId : undefined,
            },
        });
    }
    async updateDepartment(organizationId, id, dto) {
        const department = await this.prisma.department.findFirst({
            where: { id, organizationId },
        });
        if (!department)
            throw new common_1.NotFoundException('Department not found');
        return this.prisma.department.update({
            where: { id },
            data: {
                ...dto,
                ...(dto.headId !== undefined
                    ? { headId: dto.headId?.trim() ? dto.headId : null }
                    : {}),
            },
        });
    }
    async deleteDepartment(organizationId, id) {
        const department = await this.prisma.department.findFirst({
            where: { id, organizationId },
        });
        if (!department)
            throw new common_1.NotFoundException('Department not found');
        return this.prisma.department.delete({ where: { id } });
    }
    async getStats(organizationId) {
        const [branches, departments, employees] = await Promise.all([
            this.prisma.branch.count({ where: { organizationId } }),
            this.prisma.department.count({ where: { organizationId } }),
            this.prisma.employee.count({ where: { organizationId } }),
        ]);
        return { branches, departments, employees };
    }
};
exports.EntitiesService = EntitiesService;
exports.EntitiesService = EntitiesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], EntitiesService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/erp-overview/erp-overview.controller.ts"
/*!*****************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/erp-overview/erp-overview.controller.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErpOverviewController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const erp_overview_service_1 = __webpack_require__(/*! ./erp-overview.service */ "./apps/klypto-crm-nest-js/src/erp-overview/erp-overview.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
let ErpOverviewController = class ErpOverviewController {
    erpOverviewService;
    constructor(erpOverviewService) {
        this.erpOverviewService = erpOverviewService;
    }
    async getStats(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.erpOverviewService.getOrganizationId(req.user.sub);
        return this.erpOverviewService.getStats(orgId);
    }
};
exports.ErpOverviewController = ErpOverviewController;
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get aggregated ERP analytics' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ErpOverviewController.prototype, "getStats", null);
exports.ErpOverviewController = ErpOverviewController = __decorate([
    (0, swagger_1.ApiTags)('ERP Overview'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, common_1.Controller)('erp-overview'),
    __metadata("design:paramtypes", [typeof (_a = typeof erp_overview_service_1.ErpOverviewService !== "undefined" && erp_overview_service_1.ErpOverviewService) === "function" ? _a : Object])
], ErpOverviewController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/erp-overview/erp-overview.module.ts"
/*!*************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/erp-overview/erp-overview.module.ts ***!
  \*************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErpOverviewModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const erp_overview_service_1 = __webpack_require__(/*! ./erp-overview.service */ "./apps/klypto-crm-nest-js/src/erp-overview/erp-overview.service.ts");
const erp_overview_controller_1 = __webpack_require__(/*! ./erp-overview.controller */ "./apps/klypto-crm-nest-js/src/erp-overview/erp-overview.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
let ErpOverviewModule = class ErpOverviewModule {
};
exports.ErpOverviewModule = ErpOverviewModule;
exports.ErpOverviewModule = ErpOverviewModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [erp_overview_controller_1.ErpOverviewController],
        providers: [erp_overview_service_1.ErpOverviewService],
    })
], ErpOverviewModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/erp-overview/erp-overview.service.ts"
/*!**************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/erp-overview/erp-overview.service.ts ***!
  \**************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErpOverviewService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let ErpOverviewService = class ErpOverviewService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrganizationId(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { organizationId: true },
        });
        if (!user || !user.organizationId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return user.organizationId;
    }
    async getStats(organizationId) {
        const now = new Date();
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(now.getMonth() - 5);
        sixMonthsAgo.setDate(1);
        const [invoices, purchases, payrolls, assets] = await Promise.all([
            this.prisma.financialTransaction.findMany({
                where: { organizationId, type: 'INVOICE', date: { gte: sixMonthsAgo } },
            }),
            this.prisma.financialTransaction.findMany({
                where: {
                    organizationId,
                    type: 'PURCHASE_ORDER',
                    date: { gte: sixMonthsAgo },
                },
            }),
            this.prisma.payrollRecord.findMany({
                where: { organizationId, createdAt: { gte: sixMonthsAgo } },
            }),
            this.prisma.asset.findMany({
                where: { organizationId },
            }),
        ]);
        const totalSales = invoices.reduce((sum, i) => sum + i.amount, 0);
        const operationalCost = purchases.reduce((sum, p) => sum + p.amount, 0) +
            payrolls.reduce((sum, pay) => sum + pay.netPay, 0);
        const netProfit = totalSales - operationalCost;
        const assetValuation = assets.reduce((sum, a) => sum + (a.value || 0), 0);
        const months = [];
        for (let i = 5; i >= 0; i--) {
            const d = new Date();
            d.setMonth(now.getMonth() - i);
            const mLabel = d.toLocaleString('default', { month: 'short' });
            const mYear = d.getFullYear();
            const mMonth = d.getMonth();
            const mSales = invoices
                .filter((inv) => {
                const idate = new Date(inv.date);
                return idate.getMonth() === mMonth && idate.getFullYear() === mYear;
            })
                .reduce((sum, inv) => sum + inv.amount, 0);
            const mCost = purchases
                .filter((p) => {
                const pdate = new Date(p.date);
                return pdate.getMonth() === mMonth && pdate.getFullYear() === mYear;
            })
                .reduce((sum, p) => sum + p.amount, 0) +
                payrolls
                    .filter((pay) => {
                    return pay.month === mMonth + 1 && pay.year === mYear;
                })
                    .reduce((sum, pay) => sum + pay.netPay, 0);
            months.push({
                label: mLabel,
                sales: mSales,
                cost: mCost,
                profit: mSales - mCost,
            });
        }
        const breakdown = [
            { label: 'Procurement', val: purchases.length },
            { label: 'Payroll', val: payrolls.length },
            { label: 'Fixed Assets', val: assets.length },
            { label: 'Invoices', val: invoices.length },
        ];
        const totalCount = breakdown.reduce((sum, b) => sum + b.val, 0) || 1;
        const normalizedBreakdown = breakdown.map((b) => ({
            label: b.label,
            val: Math.round((b.val / totalCount) * 100),
            count: b.val,
        }));
        return {
            totalSales,
            operationalCost,
            netProfit,
            assetValuation,
            performance: months,
            breakdown: normalizedBreakdown,
        };
    }
};
exports.ErpOverviewService = ErpOverviewService;
exports.ErpOverviewService = ErpOverviewService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], ErpOverviewService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/finance/dto/finance.dto.ts"
/*!****************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/finance/dto/finance.dto.ts ***!
  \****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateFinanceDto = exports.CreateFinanceDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateFinanceDto {
    referenceNumber;
    type;
    amount;
    date;
    status;
    partnerId;
}
exports.CreateFinanceDto = CreateFinanceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'INV-2024-001' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFinanceDto.prototype, "referenceNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'INVOICE', enum: ['INVOICE', 'PURCHASE_ORDER'] }),
    (0, class_validator_1.IsEnum)(['INVOICE', 'PURCHASE_ORDER']),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFinanceDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4200.5 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateFinanceDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-03-25T00:00:00Z' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFinanceDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Pending',
        enum: ['Draft', 'Approved', 'Paid', 'Overdue', 'Fulfilled'],
    }),
    (0, class_validator_1.IsEnum)(['Draft', 'Approved', 'Paid', 'Overdue', 'Fulfilled']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFinanceDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'clx...id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFinanceDto.prototype, "partnerId", void 0);
class UpdateFinanceDto extends (0, swagger_1.PartialType)(CreateFinanceDto) {
}
exports.UpdateFinanceDto = UpdateFinanceDto;


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/finance/dto/reimbursement.dto.ts"
/*!**********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/finance/dto/reimbursement.dto.ts ***!
  \**********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateReimbursementStatusDto = exports.CreateReimbursementDto = exports.ReimbursementStatus = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
var ReimbursementStatus;
(function (ReimbursementStatus) {
    ReimbursementStatus["PENDING"] = "Pending";
    ReimbursementStatus["APPROVED"] = "Approved";
    ReimbursementStatus["REJECTED"] = "Rejected";
    ReimbursementStatus["REIMBURSED"] = "Reimbursed";
})(ReimbursementStatus || (exports.ReimbursementStatus = ReimbursementStatus = {}));
class CreateReimbursementDto {
    amount;
    reason;
    attachmentUrl;
    date;
    employeeId;
}
exports.CreateReimbursementDto = CreateReimbursementDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 150.5, description: 'Amount to be reimbursed' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateReimbursementDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Travel expenses for client meeting',
        description: 'Reason for the expense',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateReimbursementDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'https://example.com/receipt.pdf',
        description: 'URL to the attached bill/receipt',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReimbursementDto.prototype, "attachmentUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: '2026-04-24T10:00:00Z',
        description: 'Date of the expense',
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReimbursementDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'cuid_employee_id', description: 'Employee ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateReimbursementDto.prototype, "employeeId", void 0);
class UpdateReimbursementStatusDto {
    status;
}
exports.UpdateReimbursementStatusDto = UpdateReimbursementStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ReimbursementStatus,
        example: ReimbursementStatus.APPROVED,
    }),
    (0, class_validator_1.IsEnum)(ReimbursementStatus),
    __metadata("design:type", String)
], UpdateReimbursementStatusDto.prototype, "status", void 0);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/finance/finance.controller.ts"
/*!*******************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/finance/finance.controller.ts ***!
  \*******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FinanceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const finance_service_1 = __webpack_require__(/*! ./finance.service */ "./apps/klypto-crm-nest-js/src/finance/finance.service.ts");
const finance_dto_1 = __webpack_require__(/*! ./dto/finance.dto */ "./apps/klypto-crm-nest-js/src/finance/dto/finance.dto.ts");
const reimbursement_dto_1 = __webpack_require__(/*! ./dto/reimbursement.dto */ "./apps/klypto-crm-nest-js/src/finance/dto/reimbursement.dto.ts");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
let FinanceController = class FinanceController {
    financeService;
    constructor(financeService) {
        this.financeService = financeService;
    }
    async findAll(req, type) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.financeService.getOrganizationId(req.user.sub);
        return this.financeService.findAll(orgId, type);
    }
    async create(req, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.financeService.getOrganizationId(req.user.sub);
        return this.financeService.create(orgId, dto);
    }
    async update(req, id, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.financeService.getOrganizationId(req.user.sub);
        return this.financeService.update(orgId, id, dto);
    }
    async remove(req, id) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.financeService.getOrganizationId(req.user.sub);
        return this.financeService.delete(orgId, id);
    }
    async getStats(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.financeService.getOrganizationId(req.user.sub);
        return this.financeService.getStats(orgId);
    }
    async createReimbursement(req, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.financeService.getOrganizationId(req.user.sub);
        return this.financeService.createReimbursement(orgId, dto);
    }
    async findAllReimbursements(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.financeService.getOrganizationId(req.user.sub);
        return this.financeService.findAllReimbursements(orgId);
    }
    async updateReimbursementStatus(req, id, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.financeService.getOrganizationId(req.user.sub);
        return this.financeService.updateReimbursementStatus(orgId, id, dto);
    }
    async getReimbursementStats(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.financeService.getOrganizationId(req.user.sub);
        return this.financeService.getReimbursementStats(orgId);
    }
};
exports.FinanceController = FinanceController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all financial transactions' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new transaction' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof finance_dto_1.CreateFinanceDto !== "undefined" && finance_dto_1.CreateFinanceDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update transaction status' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_c = typeof finance_dto_1.UpdateFinanceDto !== "undefined" && finance_dto_1.UpdateFinanceDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a transaction' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get financial statistics' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "getStats", null);
__decorate([
    (0, common_1.Post)('reimbursements'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a reimbursement request' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_d = typeof reimbursement_dto_1.CreateReimbursementDto !== "undefined" && reimbursement_dto_1.CreateReimbursementDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "createReimbursement", null);
__decorate([
    (0, common_1.Get)('reimbursements'),
    (0, swagger_1.ApiOperation)({ summary: 'List all reimbursement requests' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "findAllReimbursements", null);
__decorate([
    (0, common_1.Patch)('reimbursements/:id/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Update reimbursement status' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_e = typeof reimbursement_dto_1.UpdateReimbursementStatusDto !== "undefined" && reimbursement_dto_1.UpdateReimbursementStatusDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "updateReimbursementStatus", null);
__decorate([
    (0, common_1.Get)('reimbursements/stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get reimbursement statistics' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "getReimbursementStats", null);
exports.FinanceController = FinanceController = __decorate([
    (0, swagger_1.ApiTags)('Finance'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('finance'),
    __metadata("design:paramtypes", [typeof (_a = typeof finance_service_1.FinanceService !== "undefined" && finance_service_1.FinanceService) === "function" ? _a : Object])
], FinanceController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/finance/finance.module.ts"
/*!***************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/finance/finance.module.ts ***!
  \***************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FinanceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const finance_service_1 = __webpack_require__(/*! ./finance.service */ "./apps/klypto-crm-nest-js/src/finance/finance.service.ts");
const finance_controller_1 = __webpack_require__(/*! ./finance.controller */ "./apps/klypto-crm-nest-js/src/finance/finance.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
let FinanceModule = class FinanceModule {
};
exports.FinanceModule = FinanceModule;
exports.FinanceModule = FinanceModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [finance_controller_1.FinanceController],
        providers: [finance_service_1.FinanceService],
        exports: [finance_service_1.FinanceService],
    })
], FinanceModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/finance/finance.service.ts"
/*!****************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/finance/finance.service.ts ***!
  \****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FinanceService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let FinanceService = class FinanceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrganizationId(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { organizationId: true },
        });
        if (!user || !user.organizationId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return user.organizationId;
    }
    async findAll(organizationId, type) {
        return this.prisma.financialTransaction.findMany({
            where: {
                organizationId,
                ...(type && { type }),
            },
            include: { partner: { select: { name: true, type: true } } },
            orderBy: { date: 'desc' },
        });
    }
    async create(organizationId, dto) {
        return this.prisma.financialTransaction.create({
            data: {
                ...dto,
                organizationId,
                date: dto.date ? new Date(dto.date) : new Date(),
            },
        });
    }
    async update(organizationId, id, dto) {
        const transaction = await this.prisma.financialTransaction.findFirst({
            where: { id, organizationId },
        });
        if (!transaction)
            throw new common_1.NotFoundException('Transaction not found');
        return this.prisma.financialTransaction.update({
            where: { id },
            data: {
                ...dto,
                ...(dto.date && { date: new Date(dto.date) }),
            },
        });
    }
    async delete(organizationId, id) {
        const transaction = await this.prisma.financialTransaction.findFirst({
            where: { id, organizationId },
        });
        if (!transaction)
            throw new common_1.NotFoundException('Transaction not found');
        return this.prisma.financialTransaction.delete({ where: { id } });
    }
    async getStats(organizationId) {
        const transactions = await this.prisma.financialTransaction.findMany({
            where: { organizationId },
        });
        const receivables = transactions.filter((t) => t.type === 'INVOICE' && t.status !== 'Paid');
        const payables = transactions.filter((t) => t.type === 'PURCHASE_ORDER' && t.status !== 'Paid');
        return {
            totalReceivables: receivables.reduce((sum, t) => sum + t.amount, 0),
            totalPayables: payables.reduce((sum, t) => sum + t.amount, 0),
            count: transactions.length,
        };
    }
    async createReimbursement(organizationId, dto) {
        return this.prisma.reimbursement.create({
            data: {
                ...dto,
                organizationId,
                date: dto.date ? new Date(dto.date) : new Date(),
            },
            include: { employee: { select: { name: true, code: true } } },
        });
    }
    async findAllReimbursements(organizationId) {
        return this.prisma.reimbursement.findMany({
            where: { organizationId },
            include: { employee: { select: { name: true, code: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    async updateReimbursementStatus(organizationId, id, dto) {
        const reimbursement = await this.prisma.reimbursement.findFirst({
            where: { id, organizationId },
        });
        if (!reimbursement)
            throw new common_1.NotFoundException('Reimbursement request not found');
        return this.prisma.reimbursement.update({
            where: { id },
            data: { status: dto.status },
        });
    }
    async getReimbursementStats(organizationId) {
        const reimbursements = await this.prisma.reimbursement.findMany({
            where: { organizationId },
        });
        const pending = reimbursements.filter((r) => r.status === 'Pending');
        const reimbursed = reimbursements.filter((r) => r.status === 'Reimbursed');
        return {
            pendingExpenses: pending.reduce((sum, r) => sum + r.amount, 0),
            totalReimbursed: reimbursed.reduce((sum, r) => sum + r.amount, 0),
            count: reimbursements.length,
        };
    }
};
exports.FinanceService = FinanceService;
exports.FinanceService = FinanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], FinanceService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/grievances/dto/grievance.dto.ts"
/*!*********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/grievances/dto/grievance.dto.ts ***!
  \*********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateGrievanceDto = exports.CreateGrievanceDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateGrievanceDto {
    subject;
    category;
    description;
    severity;
    isAnonymous;
    employeeId;
}
exports.CreateGrievanceDto = CreateGrievanceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Unfair treatment in project allocation' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGrievanceDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ethics' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGrievanceDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'I have been consistently denied opportunities for high-impact projects despite performance.',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGrievanceDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Medium',
        enum: ['Low', 'Medium', 'High', 'Critical'],
    }),
    (0, class_validator_1.IsEnum)(['Low', 'Medium', 'High', 'Critical']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateGrievanceDto.prototype, "severity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateGrievanceDto.prototype, "isAnonymous", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'clx...id', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateGrievanceDto.prototype, "employeeId", void 0);
class UpdateGrievanceDto extends (0, swagger_1.PartialType)(CreateGrievanceDto) {
    status;
}
exports.UpdateGrievanceDto = UpdateGrievanceDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'In Review',
        enum: ['Open', 'In Review', 'Escalated', 'Resolved'],
    }),
    (0, class_validator_1.IsEnum)(['Open', 'In Review', 'Escalated', 'Resolved']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateGrievanceDto.prototype, "status", void 0);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/grievances/grievances.controller.ts"
/*!*************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/grievances/grievances.controller.ts ***!
  \*************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GrievancesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const grievances_service_1 = __webpack_require__(/*! ./grievances.service */ "./apps/klypto-crm-nest-js/src/grievances/grievances.service.ts");
const grievance_dto_1 = __webpack_require__(/*! ./dto/grievance.dto */ "./apps/klypto-crm-nest-js/src/grievances/dto/grievance.dto.ts");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
let GrievancesController = class GrievancesController {
    grievancesService;
    constructor(grievancesService) {
        this.grievancesService = grievancesService;
    }
    getNormalizedRoles(roles = []) {
        return roles.map((role) => String(role).toUpperCase());
    }
    hasPrivilegedGrievanceAccess(roles) {
        return ['SUPER_ADMIN', 'ADMIN', 'MANAGER', 'HR'].some((role) => roles.includes(role));
    }
    async findAll(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.grievancesService.getOrganizationId(req.user.sub);
        const roles = this.getNormalizedRoles(req.user.roles || []);
        const isEmployeeOnly = roles.includes('EMPLOYEE') && !this.hasPrivilegedGrievanceAccess(roles);
        if (isEmployeeOnly) {
            const employeeId = await this.grievancesService.getEmployeeId(req.user.sub);
            if (!employeeId)
                return [];
            return this.grievancesService.findAll(orgId, employeeId);
        }
        return this.grievancesService.findAll(orgId);
    }
    async create(req, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.grievancesService.getOrganizationId(req.user.sub);
        return this.grievancesService.create(orgId, dto);
    }
    async update(req, id, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const roles = this.getNormalizedRoles(req.user.roles || []);
        if (!this.hasPrivilegedGrievanceAccess(roles)) {
            throw new common_1.ForbiddenException('You do not have permission to update grievance status');
        }
        const orgId = await this.grievancesService.getOrganizationId(req.user.sub);
        return this.grievancesService.update(orgId, id, dto);
    }
    async remove(req, id) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const roles = this.getNormalizedRoles(req.user.roles || []);
        if (!this.hasPrivilegedGrievanceAccess(roles)) {
            throw new common_1.ForbiddenException('You do not have permission to delete grievance records');
        }
        const orgId = await this.grievancesService.getOrganizationId(req.user.sub);
        return this.grievancesService.delete(orgId, id);
    }
    async getStats(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.grievancesService.getOrganizationId(req.user.sub);
        return this.grievancesService.getStats(orgId);
    }
    async findRecent(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.grievancesService.getOrganizationId(req.user.sub);
        return this.grievancesService.findRecent(orgId);
    }
};
exports.GrievancesController = GrievancesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all grievances' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GrievancesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Submit a new grievance' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof grievance_dto_1.CreateGrievanceDto !== "undefined" && grievance_dto_1.CreateGrievanceDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], GrievancesController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a grievance' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_c = typeof grievance_dto_1.UpdateGrievanceDto !== "undefined" && grievance_dto_1.UpdateGrievanceDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], GrievancesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a grievance' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], GrievancesController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get grievance dashboard statistics' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GrievancesController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)('recent'),
    (0, swagger_1.ApiOperation)({ summary: 'Get recent grievances' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GrievancesController.prototype, "findRecent", null);
exports.GrievancesController = GrievancesController = __decorate([
    (0, swagger_1.ApiTags)('Grievances'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('grievances'),
    __metadata("design:paramtypes", [typeof (_a = typeof grievances_service_1.GrievancesService !== "undefined" && grievances_service_1.GrievancesService) === "function" ? _a : Object])
], GrievancesController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/grievances/grievances.module.ts"
/*!*********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/grievances/grievances.module.ts ***!
  \*********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GrievancesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const grievances_service_1 = __webpack_require__(/*! ./grievances.service */ "./apps/klypto-crm-nest-js/src/grievances/grievances.service.ts");
const grievances_controller_1 = __webpack_require__(/*! ./grievances.controller */ "./apps/klypto-crm-nest-js/src/grievances/grievances.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
let GrievancesModule = class GrievancesModule {
};
exports.GrievancesModule = GrievancesModule;
exports.GrievancesModule = GrievancesModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [grievances_controller_1.GrievancesController],
        providers: [grievances_service_1.GrievancesService],
        exports: [grievances_service_1.GrievancesService],
    })
], GrievancesModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/grievances/grievances.service.ts"
/*!**********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/grievances/grievances.service.ts ***!
  \**********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GrievancesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let GrievancesService = class GrievancesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrganizationId(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { organizationId: true },
        });
        if (!user || !user.organizationId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return user.organizationId;
    }
    async findAll(organizationId, employeeId) {
        const grievances = await this.prisma.grievance.findMany({
            where: {
                organizationId,
                ...(employeeId ? { employeeId } : {}),
            },
            include: {
                employee: {
                    select: { id: true, name: true, department: true },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
        return grievances.map((g) => {
            if (g.isAnonymous) {
                return { ...g, employee: null };
            }
            return g;
        });
    }
    async create(organizationId, dto) {
        return this.prisma.grievance.create({
            data: { ...dto, organizationId },
        });
    }
    async update(organizationId, id, dto) {
        const grievance = await this.prisma.grievance.findFirst({
            where: { id, organizationId },
        });
        if (!grievance)
            throw new common_1.NotFoundException('Grievance not found');
        return this.prisma.grievance.update({
            where: { id },
            data: dto,
        });
    }
    async delete(organizationId, id) {
        const grievance = await this.prisma.grievance.findFirst({
            where: { id, organizationId },
        });
        if (!grievance)
            throw new common_1.NotFoundException('Grievance not found');
        return this.prisma.grievance.delete({ where: { id } });
    }
    async getStats(organizationId) {
        const [total, unresolved, critical, resolved] = await Promise.all([
            this.prisma.grievance.count({ where: { organizationId } }),
            this.prisma.grievance.count({
                where: { organizationId, status: { not: 'Resolved' } },
            }),
            this.prisma.grievance.count({
                where: {
                    organizationId,
                    severity: { in: ['High', 'Critical'] },
                    status: { not: 'Resolved' },
                },
            }),
            this.prisma.grievance.count({
                where: {
                    organizationId,
                    status: 'Resolved',
                    updatedAt: {
                        gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
                    },
                },
            }),
        ]);
        return { total, unresolved, critical, resolved };
    }
    async findRecent(organizationId) {
        return this.prisma.grievance.findMany({
            where: { organizationId },
            take: 5,
            orderBy: { createdAt: 'desc' },
        });
    }
    async getEmployeeId(userId) {
        const employee = await this.prisma.employee.findFirst({
            where: { userId },
            select: { id: true },
        });
        return employee?.id ?? null;
    }
};
exports.GrievancesService = GrievancesService;
exports.GrievancesService = GrievancesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], GrievancesService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/hrms-overview/hrms-overview.controller.ts"
/*!*******************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/hrms-overview/hrms-overview.controller.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HrmsOverviewController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const hrms_overview_service_1 = __webpack_require__(/*! ./hrms-overview.service */ "./apps/klypto-crm-nest-js/src/hrms-overview/hrms-overview.service.ts");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
let HrmsOverviewController = class HrmsOverviewController {
    hrmsOverviewService;
    constructor(hrmsOverviewService) {
        this.hrmsOverviewService = hrmsOverviewService;
    }
    async getStats(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.hrmsOverviewService.getOrganizationId(req.user.sub);
        return this.hrmsOverviewService.getStats(orgId);
    }
};
exports.HrmsOverviewController = HrmsOverviewController;
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get aggregated HR statistics' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HrmsOverviewController.prototype, "getStats", null);
exports.HrmsOverviewController = HrmsOverviewController = __decorate([
    (0, swagger_1.ApiTags)('HR Overview'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('hrms-overview'),
    __metadata("design:paramtypes", [typeof (_a = typeof hrms_overview_service_1.HrmsOverviewService !== "undefined" && hrms_overview_service_1.HrmsOverviewService) === "function" ? _a : Object])
], HrmsOverviewController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/hrms-overview/hrms-overview.module.ts"
/*!***************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/hrms-overview/hrms-overview.module.ts ***!
  \***************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HrmsOverviewModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const hrms_overview_service_1 = __webpack_require__(/*! ./hrms-overview.service */ "./apps/klypto-crm-nest-js/src/hrms-overview/hrms-overview.service.ts");
const hrms_overview_controller_1 = __webpack_require__(/*! ./hrms-overview.controller */ "./apps/klypto-crm-nest-js/src/hrms-overview/hrms-overview.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
let HrmsOverviewModule = class HrmsOverviewModule {
};
exports.HrmsOverviewModule = HrmsOverviewModule;
exports.HrmsOverviewModule = HrmsOverviewModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [hrms_overview_controller_1.HrmsOverviewController],
        providers: [hrms_overview_service_1.HrmsOverviewService],
        exports: [hrms_overview_service_1.HrmsOverviewService],
    })
], HrmsOverviewModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/hrms-overview/hrms-overview.service.ts"
/*!****************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/hrms-overview/hrms-overview.service.ts ***!
  \****************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HrmsOverviewService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let HrmsOverviewService = class HrmsOverviewService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrganizationId(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { organizationId: true },
        });
        if (!user || !user.organizationId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return user.organizationId;
    }
    async getStats(organizationId) {
        const [totalEmployees, pendingLeaves, activeEmployees, structuresCount, attendanceToday,] = await Promise.all([
            this.prisma.employee.count({ where: { organizationId } }),
            this.prisma.leaveRequest.count({
                where: { organizationId, status: 'Pending' },
            }),
            this.prisma.employee.count({
                where: { organizationId, status: { in: ['Active', 'Onboarding'] } },
            }),
            this.prisma.salaryStructure.count({ where: { organizationId } }),
            this.prisma.attendanceRecord.count({
                where: {
                    organizationId,
                    date: {
                        gte: new Date(new Date().setHours(0, 0, 0, 0)),
                        lte: new Date(new Date().setHours(23, 59, 59, 999)),
                    },
                    status: 'Present',
                },
            }),
        ]);
        const attendanceRate = activeEmployees > 0 ? (attendanceToday / activeEmployees) * 100 : 0;
        const payrollReady = totalEmployees > 0 ? (structuresCount / totalEmployees) * 100 : 0;
        return {
            totalEmployees,
            attendanceRate: attendanceRate.toFixed(1) + '%',
            pendingLeaves,
            payrollReady: payrollReady.toFixed(0) + '%',
        };
    }
};
exports.HrmsOverviewService = HrmsOverviewService;
exports.HrmsOverviewService = HrmsOverviewService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], HrmsOverviewService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/leads/dto/lead.dto.ts"
/*!***********************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/leads/dto/lead.dto.ts ***!
  \***********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateLeadNoteDto = exports.UpdateLeadDto = exports.CreateLeadDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateLeadDto {
    name;
    email;
    phone;
    company;
    priority;
    status;
    value;
    assigneeId;
}
exports.CreateLeadDto = CreateLeadDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLeadDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john@example.com', required: false }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateLeadDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+1234567890', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateLeadDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Acme Corp', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateLeadDto.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Medium', enum: ['High', 'Medium', 'Low'] }),
    (0, class_validator_1.IsEnum)(['High', 'Medium', 'Low']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateLeadDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'New',
        enum: ['New', 'Discovery', 'Proposal', 'Negotiation', 'Won', 'Lost'],
    }),
    (0, class_validator_1.IsEnum)(['New', 'Discovery', 'Proposal', 'Negotiation', 'Won', 'Lost']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateLeadDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1000, required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateLeadDto.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'clx...userId', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateLeadDto.prototype, "assigneeId", void 0);
class UpdateLeadDto extends (0, swagger_1.PartialType)(CreateLeadDto) {
}
exports.UpdateLeadDto = UpdateLeadDto;
class CreateLeadNoteDto {
    content;
}
exports.CreateLeadNoteDto = CreateLeadNoteDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Spoke with the client, they are interested.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLeadNoteDto.prototype, "content", void 0);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/leads/leads.controller.ts"
/*!***************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/leads/leads.controller.ts ***!
  \***************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LeadsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const leads_service_1 = __webpack_require__(/*! ./leads.service */ "./apps/klypto-crm-nest-js/src/leads/leads.service.ts");
const lead_dto_1 = __webpack_require__(/*! ./dto/lead.dto */ "./apps/klypto-crm-nest-js/src/leads/dto/lead.dto.ts");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
let LeadsController = class LeadsController {
    leadsService;
    constructor(leadsService) {
        this.leadsService = leadsService;
    }
    async findAll(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.leadsService.getOrganizationId(req.user.sub);
        return this.leadsService.findAll(orgId);
    }
    async findOne(req, id) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.leadsService.getOrganizationId(req.user.sub);
        return this.leadsService.findOne(orgId, id);
    }
    async create(req, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.leadsService.getOrganizationId(req.user.sub);
        return this.leadsService.create(orgId, dto);
    }
    async update(req, id, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.leadsService.getOrganizationId(req.user.sub);
        return this.leadsService.update(orgId, id, dto);
    }
    async remove(req, id) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.leadsService.getOrganizationId(req.user.sub);
        return this.leadsService.delete(orgId, id);
    }
    async addNote(req, id, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.leadsService.getOrganizationId(req.user.sub);
        return this.leadsService.addNote(orgId, id, dto);
    }
    async getNotes(req, id) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.leadsService.getOrganizationId(req.user.sub);
        return this.leadsService.getNotes(orgId, id);
    }
};
exports.LeadsController = LeadsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all leads' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get lead details' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new lead' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof lead_dto_1.CreateLeadDto !== "undefined" && lead_dto_1.CreateLeadDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a lead' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_c = typeof lead_dto_1.UpdateLeadDto !== "undefined" && lead_dto_1.UpdateLeadDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a lead' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/notes'),
    (0, swagger_1.ApiOperation)({ summary: 'Add a note to a lead' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_d = typeof lead_dto_1.CreateLeadNoteDto !== "undefined" && lead_dto_1.CreateLeadNoteDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "addNote", null);
__decorate([
    (0, common_1.Get)(':id/notes'),
    (0, swagger_1.ApiOperation)({ summary: 'Get notes for a lead' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getNotes", null);
exports.LeadsController = LeadsController = __decorate([
    (0, swagger_1.ApiTags)('Leads'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('leads'),
    __metadata("design:paramtypes", [typeof (_a = typeof leads_service_1.LeadsService !== "undefined" && leads_service_1.LeadsService) === "function" ? _a : Object])
], LeadsController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/leads/leads.module.ts"
/*!***********************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/leads/leads.module.ts ***!
  \***********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LeadsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const leads_service_1 = __webpack_require__(/*! ./leads.service */ "./apps/klypto-crm-nest-js/src/leads/leads.service.ts");
const leads_controller_1 = __webpack_require__(/*! ./leads.controller */ "./apps/klypto-crm-nest-js/src/leads/leads.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
let LeadsModule = class LeadsModule {
};
exports.LeadsModule = LeadsModule;
exports.LeadsModule = LeadsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [leads_controller_1.LeadsController],
        providers: [leads_service_1.LeadsService],
        exports: [leads_service_1.LeadsService],
    })
], LeadsModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/leads/leads.service.ts"
/*!************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/leads/leads.service.ts ***!
  \************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LeadsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let LeadsService = class LeadsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrganizationId(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { organizationId: true },
        });
        if (!user || !user.organizationId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return user.organizationId;
    }
    async findAll(organizationId) {
        return this.prisma.lead.findMany({
            where: { organizationId },
            include: {
                assignee: {
                    select: { id: true, fullName: true, email: true },
                },
                _count: {
                    select: { notes: true },
                },
            },
            orderBy: { updatedAt: 'desc' },
        });
    }
    async findOne(organizationId, id) {
        const lead = await this.prisma.lead.findFirst({
            where: { id, organizationId },
            include: {
                assignee: {
                    select: { id: true, fullName: true, email: true },
                },
                notes: {
                    orderBy: { createdAt: 'desc' },
                },
            },
        });
        if (!lead)
            throw new common_1.NotFoundException('Lead not found');
        return lead;
    }
    async create(organizationId, dto) {
        return this.prisma.lead.create({
            data: {
                ...dto,
                organizationId,
            },
            include: { assignee: true },
        });
    }
    async update(organizationId, id, dto) {
        await this.findOne(organizationId, id);
        return this.prisma.lead.update({
            where: { id },
            data: dto,
            include: { assignee: true },
        });
    }
    async delete(organizationId, id) {
        await this.findOne(organizationId, id);
        return this.prisma.lead.delete({
            where: { id },
        });
    }
    async addNote(organizationId, leadId, dto) {
        await this.findOne(organizationId, leadId);
        return this.prisma.leadNote.create({
            data: {
                content: dto.content,
                leadId,
            },
        });
    }
    async getNotes(organizationId, leadId) {
        await this.findOne(organizationId, leadId);
        return this.prisma.leadNote.findMany({
            where: { leadId },
            orderBy: { createdAt: 'desc' },
        });
    }
};
exports.LeadsService = LeadsService;
exports.LeadsService = LeadsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], LeadsService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/leaves/dto/leave.dto.ts"
/*!*************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/leaves/dto/leave.dto.ts ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateLeaveDto = exports.UpdateLeaveStatusDto = exports.CreateLeaveDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateLeaveDto {
    type;
    startDate;
    endDate;
    reason;
    employeeId;
}
exports.CreateLeaveDto = CreateLeaveDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Annual' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-04-11T00:00:00.000Z' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-04-13T00:00:00.000Z' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Family vacation' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'clx...employeeId' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "employeeId", void 0);
class UpdateLeaveStatusDto {
    status;
}
exports.UpdateLeaveStatusDto = UpdateLeaveStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['Pending', 'Approved', 'Rejected'] }),
    (0, class_validator_1.IsEnum)(['Pending', 'Approved', 'Rejected']),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateLeaveStatusDto.prototype, "status", void 0);
class UpdateLeaveDto extends (0, swagger_1.PartialType)(CreateLeaveDto) {
}
exports.UpdateLeaveDto = UpdateLeaveDto;


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/leaves/leaves.controller.ts"
/*!*****************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/leaves/leaves.controller.ts ***!
  \*****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LeavesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const leaves_service_1 = __webpack_require__(/*! ./leaves.service */ "./apps/klypto-crm-nest-js/src/leaves/leaves.service.ts");
const leave_dto_1 = __webpack_require__(/*! ./dto/leave.dto */ "./apps/klypto-crm-nest-js/src/leaves/dto/leave.dto.ts");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
let LeavesController = class LeavesController {
    leavesService;
    constructor(leavesService) {
        this.leavesService = leavesService;
    }
    getNormalizedRoles(roles = []) {
        return roles.map((role) => String(role).toUpperCase());
    }
    hasPrivilegedLeaveAccess(roles) {
        return ['SUPER_ADMIN', 'ADMIN', 'MANAGER', 'HR'].some((role) => roles.includes(role));
    }
    hasLeaveEditAccess(roles) {
        return ['SUPER_ADMIN', 'HR'].some((role) => roles.includes(role));
    }
    async getStats(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.leavesService.getOrganizationId(req.user.sub);
        return this.leavesService.getStats(orgId);
    }
    async getMyEmployeeId(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const employeeId = await this.leavesService.getEmployeeId(req.user.sub);
        return { employeeId };
    }
    async findAll(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.leavesService.getOrganizationId(req.user.sub);
        const roles = this.getNormalizedRoles(req.user.roles || []);
        const isEmployeeOnly = roles.includes('EMPLOYEE') && !this.hasPrivilegedLeaveAccess(roles);
        if (isEmployeeOnly) {
            const employeeId = await this.leavesService.getEmployeeId(req.user.sub);
            if (!employeeId)
                return [];
            return this.leavesService.findAll(orgId, employeeId);
        }
        return this.leavesService.findAll(orgId);
    }
    async create(req, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.leavesService.getOrganizationId(req.user.sub);
        return this.leavesService.create(orgId, dto);
    }
    async update(req, id, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const roles = this.getNormalizedRoles(req.user.roles || []);
        if (!this.hasLeaveEditAccess(roles)) {
            throw new common_1.ForbiddenException('You do not have permission to edit leave requests');
        }
        const orgId = await this.leavesService.getOrganizationId(req.user.sub);
        return this.leavesService.updateLeave(orgId, id, dto);
    }
    async updateStatus(req, id, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const roles = this.getNormalizedRoles(req.user.roles || []);
        if (!this.hasPrivilegedLeaveAccess(roles)) {
            throw new common_1.ForbiddenException('You do not have permission to approve or reject leave requests');
        }
        const orgId = await this.leavesService.getOrganizationId(req.user.sub);
        return this.leavesService.updateStatus(orgId, id, dto);
    }
};
exports.LeavesController = LeavesController;
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get leave request statistics' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LeavesController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)('my-employee-id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get the employee ID linked to the current user' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LeavesController.prototype, "getMyEmployeeId", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all leave requests' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LeavesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new leave request' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof leave_dto_1.CreateLeaveDto !== "undefined" && leave_dto_1.CreateLeaveDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], LeavesController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update leave request details while pending' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_c = typeof leave_dto_1.UpdateLeaveDto !== "undefined" && leave_dto_1.UpdateLeaveDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], LeavesController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Approve or reject a leave request' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_d = typeof leave_dto_1.UpdateLeaveStatusDto !== "undefined" && leave_dto_1.UpdateLeaveStatusDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], LeavesController.prototype, "updateStatus", null);
exports.LeavesController = LeavesController = __decorate([
    (0, swagger_1.ApiTags)('Leaves'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('leaves'),
    __metadata("design:paramtypes", [typeof (_a = typeof leaves_service_1.LeavesService !== "undefined" && leaves_service_1.LeavesService) === "function" ? _a : Object])
], LeavesController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/leaves/leaves.module.ts"
/*!*************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/leaves/leaves.module.ts ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LeavesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const leaves_service_1 = __webpack_require__(/*! ./leaves.service */ "./apps/klypto-crm-nest-js/src/leaves/leaves.service.ts");
const leaves_controller_1 = __webpack_require__(/*! ./leaves.controller */ "./apps/klypto-crm-nest-js/src/leaves/leaves.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
let LeavesModule = class LeavesModule {
};
exports.LeavesModule = LeavesModule;
exports.LeavesModule = LeavesModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [leaves_controller_1.LeavesController],
        providers: [leaves_service_1.LeavesService],
        exports: [leaves_service_1.LeavesService],
    })
], LeavesModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/leaves/leaves.service.ts"
/*!**************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/leaves/leaves.service.ts ***!
  \**************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LeavesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let LeavesService = class LeavesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrganizationId(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { organizationId: true },
        });
        if (!user || !user.organizationId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return user.organizationId;
    }
    async findAll(organizationId, employeeId) {
        return this.prisma.leaveRequest.findMany({
            where: {
                organizationId,
                ...(employeeId ? { employeeId } : {}),
            },
            include: {
                employee: {
                    select: {
                        id: true,
                        name: true,
                        code: true,
                        role: true,
                        department: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async create(organizationId, dto) {
        return this.prisma.leaveRequest.create({
            data: {
                type: dto.type,
                startDate: new Date(dto.startDate),
                endDate: new Date(dto.endDate),
                reason: dto.reason,
                status: 'Pending',
                employee: { connect: { id: dto.employeeId } },
                organization: { connect: { id: organizationId } },
            },
            include: {
                employee: {
                    select: {
                        id: true,
                        name: true,
                        code: true,
                        role: true,
                        department: true,
                    },
                },
            },
        });
    }
    async updateStatus(organizationId, id, dto) {
        const leave = await this.prisma.leaveRequest.findFirst({
            where: { id, organizationId },
        });
        if (!leave)
            throw new common_1.NotFoundException('Leave request not found');
        return this.prisma.leaveRequest.update({
            where: { id },
            data: { status: dto.status },
            include: {
                employee: {
                    select: {
                        id: true,
                        name: true,
                        code: true,
                        role: true,
                        department: true,
                    },
                },
            },
        });
    }
    async updateLeave(organizationId, id, dto) {
        const leave = await this.prisma.leaveRequest.findFirst({
            where: { id, organizationId },
            select: {
                id: true,
                status: true,
                startDate: true,
                endDate: true,
            },
        });
        if (!leave)
            throw new common_1.NotFoundException('Leave request not found');
        if (leave.status !== 'Pending') {
            throw new common_1.ForbiddenException('Only pending leave requests can be edited');
        }
        if (dto.employeeId) {
            const employee = await this.prisma.employee.findFirst({
                where: { id: dto.employeeId, organizationId },
                select: { id: true },
            });
            if (!employee) {
                throw new common_1.NotFoundException('Employee not found in organization');
            }
        }
        const nextStartDate = dto.startDate
            ? new Date(dto.startDate)
            : leave.startDate;
        const nextEndDate = dto.endDate ? new Date(dto.endDate) : leave.endDate;
        if (nextStartDate > nextEndDate) {
            throw new common_1.BadRequestException('Start date cannot be later than end date');
        }
        return this.prisma.leaveRequest.update({
            where: { id },
            data: {
                ...(dto.type !== undefined ? { type: dto.type } : {}),
                ...(dto.startDate ? { startDate: new Date(dto.startDate) } : {}),
                ...(dto.endDate ? { endDate: new Date(dto.endDate) } : {}),
                ...(dto.reason !== undefined ? { reason: dto.reason } : {}),
                ...(dto.employeeId
                    ? { employee: { connect: { id: dto.employeeId } } }
                    : {}),
            },
            include: {
                employee: {
                    select: {
                        id: true,
                        name: true,
                        code: true,
                        role: true,
                        department: true,
                    },
                },
            },
        });
    }
    async getStats(organizationId) {
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const [total, pending, approvedThisMonth, rejected] = await Promise.all([
            this.prisma.leaveRequest.count({ where: { organizationId } }),
            this.prisma.leaveRequest.count({
                where: { organizationId, status: 'Pending' },
            }),
            this.prisma.leaveRequest.count({
                where: {
                    organizationId,
                    status: 'Approved',
                    updatedAt: { gte: startOfMonth },
                },
            }),
            this.prisma.leaveRequest.count({
                where: { organizationId, status: 'Rejected' },
            }),
        ]);
        const byType = await this.prisma.leaveRequest.groupBy({
            by: ['type'],
            where: { organizationId },
            _count: { _all: true },
        });
        return {
            total,
            pending,
            approvedThisMonth,
            rejected,
            byType: byType.map((b) => ({ type: b.type, count: b._count._all })),
        };
    }
    async getEmployeeId(userId) {
        const employee = await this.prisma.employee.findFirst({
            where: { userId },
            select: { id: true },
        });
        if (employee?.id) {
            return employee.id;
        }
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                fullName: true,
                organizationId: true,
                roleAssignments: {
                    include: {
                        role: { select: { name: true } },
                    },
                },
            },
        });
        if (!user?.organizationId) {
            return null;
        }
        const hasSuperAdminRole = (user.roleAssignments || []).some((assignment) => String(assignment.role?.name).toUpperCase() === 'SUPER_ADMIN');
        if (!hasSuperAdminRole) {
            return null;
        }
        const generatedCode = `ADM-${Date.now().toString(36).toUpperCase()}-${user.id
            .slice(-4)
            .toUpperCase()}`;
        const created = await this.prisma.employee.create({
            data: {
                name: user.fullName,
                code: generatedCode,
                role: 'SUPER_ADMIN',
                department: 'Administration',
                status: 'Active',
                organization: { connect: { id: user.organizationId } },
                user: { connect: { id: user.id } },
            },
            select: { id: true },
        });
        return created.id;
    }
};
exports.LeavesService = LeavesService;
exports.LeavesService = LeavesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], LeavesService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/mail/mail.module.ts"
/*!*********************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/mail/mail.module.ts ***!
  \*********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mail_service_1 = __webpack_require__(/*! ./mail.service */ "./apps/klypto-crm-nest-js/src/mail/mail.service.ts");
let MailModule = class MailModule {
};
exports.MailModule = MailModule;
exports.MailModule = MailModule = __decorate([
    (0, common_1.Module)({
        providers: [mail_service_1.MailService],
    })
], MailModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/mail/mail.service.ts"
/*!**********************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/mail/mail.service.ts ***!
  \**********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
let MailService = class MailService {
    mailerService;
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendWelcomeEmail(email, fullName) {
        try {
            await this.mailerService.sendMail({
                to: email,
                subject: 'Welcome to Klypto CRM',
                template: './welcome',
                context: {
                    name: fullName,
                },
            });
            return true;
        }
        catch (error) {
            console.error('Email sending failed', error);
            return false;
        }
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof mailer_1.MailerService !== "undefined" && mailer_1.MailerService) === "function" ? _a : Object])
], MailService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/main.ts"
/*!*********************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/main.ts ***!
  \*********************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/klypto-crm-nest-js/src/app.module.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const prisma_exception_filter_1 = __webpack_require__(/*! ./common/filters/prisma-exception.filter */ "./apps/klypto-crm-nest-js/src/common/filters/prisma-exception.filter.ts");
const cors_origin_util_1 = __webpack_require__(/*! ./common/cors-origin.util */ "./apps/klypto-crm-nest-js/src/common/cors-origin.util.ts");
const express = __importStar(__webpack_require__(/*! express */ "express"));
const path_1 = __webpack_require__(/*! path */ "path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        rawBody: true,
    });
    app.use('/uploads', express.static((0, path_1.join)(process.cwd(), 'uploads')));
    app.enableCors({
        origin: (origin, callback) => {
            callback(null, (0, cors_origin_util_1.isOriginAllowed)(origin));
        },
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        optionsSuccessStatus: 200,
    });
    app.setGlobalPrefix('api', {
        exclude: ['iclock', 'iclock/(.*)'],
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        exceptionFactory: (validationErrors = []) => {
            const messages = validationErrors.flatMap((error) => {
                const constraints = error.constraints
                    ? Object.values(error.constraints)
                    : [];
                return constraints.length > 0
                    ? constraints
                    : [`${error.property} is invalid`];
            });
            return new common_1.BadRequestException({
                message: messages,
                error: 'Validation failed',
            });
        },
    }));
    app.useGlobalFilters(new prisma_exception_filter_1.PrismaExceptionFilter());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Klypto CRM API')
        .setDescription('The Klypto CRM ERP Portal API documentation')
        .setVersion('1.0')
        .addTag('Klypto')
        .addServer(`http://localhost:${process.env.PORT || 3000}`, 'Local Environment')
        .addServer('https://api.yourdomain.com', 'Production Environment')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
    }, 'JWT-auth')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    const totalApis = Object.values(document.paths).reduce((acc, path) => acc + Object.keys(path).length, 0);
    document.info.description = `**Total API Endpoints: ${totalApis}**\n\n${document.info.description}`;
    swagger_1.SwaggerModule.setup('api/docs', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
            displayOperationId: true,
            filter: true,
        },
        customSiteTitle: 'Klypto CRM API Docs',
    });
    const port = Number(process.env.PORT) || 3000;
    const host = process.env.HOST || '0.0.0.0';
    await app.listen(port, host);
}
bootstrap();


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/organizations/dto/organization.dto.ts"
/*!***************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/organizations/dto/organization.dto.ts ***!
  \***************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateOrganizationDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateOrganizationDto {
    name;
    registrationNumber;
    website;
    primaryEmail;
    phoneNumber;
    taxId;
    address;
}
exports.UpdateOrganizationDto = UpdateOrganizationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nexus Global Corp' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'REG-2024-98765' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationDto.prototype, "registrationNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'www.nexusglobal.com' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationDto.prototype, "website", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'admin@nexusglobal.com' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationDto.prototype, "primaryEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+1 (555) 123-4567' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '27AAAAA0000A1Z5' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationDto.prototype, "taxId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123 Tech Avenue, San Francisco, CA' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationDto.prototype, "address", void 0);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/organizations/organizations.controller.ts"
/*!*******************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/organizations/organizations.controller.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrganizationsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const organizations_service_1 = __webpack_require__(/*! ./organizations.service */ "./apps/klypto-crm-nest-js/src/organizations/organizations.service.ts");
const organization_dto_1 = __webpack_require__(/*! ./dto/organization.dto */ "./apps/klypto-crm-nest-js/src/organizations/dto/organization.dto.ts");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
let OrganizationsController = class OrganizationsController {
    organizationsService;
    constructor(organizationsService) {
        this.organizationsService = organizationsService;
    }
    async getProfile(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.organizationsService.getOrganizationId(req.user.sub);
        return this.organizationsService.getProfile(orgId);
    }
    async updateProfile(req, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.organizationsService.getOrganizationId(req.user.sub);
        return this.organizationsService.updateProfile(orgId, dto);
    }
    async getStats(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.organizationsService.getOrganizationId(req.user.sub);
        return this.organizationsService.getDetailedStats(orgId);
    }
};
exports.OrganizationsController = OrganizationsController;
__decorate([
    (0, common_1.Get)('profile'),
    (0, swagger_1.ApiOperation)({ summary: 'Get organization profile' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrganizationsController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Patch)('profile'),
    (0, swagger_1.ApiOperation)({ summary: 'Update organization profile' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof organization_dto_1.UpdateOrganizationDto !== "undefined" && organization_dto_1.UpdateOrganizationDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], OrganizationsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get detailed organizational stats' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrganizationsController.prototype, "getStats", null);
exports.OrganizationsController = OrganizationsController = __decorate([
    (0, swagger_1.ApiTags)('Organizations'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('organizations'),
    __metadata("design:paramtypes", [typeof (_a = typeof organizations_service_1.OrganizationsService !== "undefined" && organizations_service_1.OrganizationsService) === "function" ? _a : Object])
], OrganizationsController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/organizations/organizations.module.ts"
/*!***************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/organizations/organizations.module.ts ***!
  \***************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrganizationsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const organizations_service_1 = __webpack_require__(/*! ./organizations.service */ "./apps/klypto-crm-nest-js/src/organizations/organizations.service.ts");
const organizations_controller_1 = __webpack_require__(/*! ./organizations.controller */ "./apps/klypto-crm-nest-js/src/organizations/organizations.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
let OrganizationsModule = class OrganizationsModule {
};
exports.OrganizationsModule = OrganizationsModule;
exports.OrganizationsModule = OrganizationsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [organizations_controller_1.OrganizationsController],
        providers: [organizations_service_1.OrganizationsService],
        exports: [organizations_service_1.OrganizationsService],
    })
], OrganizationsModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/organizations/organizations.service.ts"
/*!****************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/organizations/organizations.service.ts ***!
  \****************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrganizationsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let OrganizationsService = class OrganizationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrganizationId(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { organizationId: true },
        });
        if (!user || !user.organizationId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return user.organizationId;
    }
    async getProfile(organizationId) {
        const org = await this.prisma.organization.findUnique({
            where: { id: organizationId },
        });
        if (!org)
            throw new common_1.NotFoundException('Organization not found');
        return org;
    }
    async updateProfile(organizationId, dto) {
        return this.prisma.organization.update({
            where: { id: organizationId },
            data: dto,
        });
    }
    async getDetailedStats(organizationId) {
        const [employees, departments, branches, assets, projects] = await Promise.all([
            this.prisma.employee.count({ where: { organizationId } }),
            this.prisma.department.count({ where: { organizationId } }),
            this.prisma.branch.count({ where: { organizationId } }),
            this.prisma.asset.count({ where: { organizationId } }),
            this.prisma.project.count({ where: { organizationId } }),
        ]);
        return {
            employees,
            departments,
            branches,
            totalAssets: assets,
            totalProjects: projects,
            systemHealth: '100%',
            securityIndex: '98.5%',
        };
    }
};
exports.OrganizationsService = OrganizationsService;
exports.OrganizationsService = OrganizationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], OrganizationsService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/partners/dto/partner.dto.ts"
/*!*****************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/partners/dto/partner.dto.ts ***!
  \*****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePartnerDto = exports.CreatePartnerDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreatePartnerDto {
    name;
    type;
    contactPerson;
    email;
    phone;
    status;
    category;
    creditLimit;
}
exports.CreatePartnerDto = CreatePartnerDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Global Tech Solutions' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePartnerDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'CUSTOMER', enum: ['CUSTOMER', 'VENDOR'] }),
    (0, class_validator_1.IsEnum)(['CUSTOMER', 'VENDOR']),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePartnerDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Carter' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePartnerDto.prototype, "contactPerson", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john@gt-solutions.com' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePartnerDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+1 415 555 0122' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePartnerDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Active', enum: ['Active', 'Inactive', 'Blocked'] }),
    (0, class_validator_1.IsEnum)(['Active', 'Inactive', 'Blocked']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePartnerDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'IT Electronics' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePartnerDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 50000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreatePartnerDto.prototype, "creditLimit", void 0);
class UpdatePartnerDto extends (0, swagger_1.PartialType)(CreatePartnerDto) {
}
exports.UpdatePartnerDto = UpdatePartnerDto;


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/partners/partners.controller.ts"
/*!*********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/partners/partners.controller.ts ***!
  \*********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PartnersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const partners_service_1 = __webpack_require__(/*! ./partners.service */ "./apps/klypto-crm-nest-js/src/partners/partners.service.ts");
const partner_dto_1 = __webpack_require__(/*! ./dto/partner.dto */ "./apps/klypto-crm-nest-js/src/partners/dto/partner.dto.ts");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
let PartnersController = class PartnersController {
    partnersService;
    constructor(partnersService) {
        this.partnersService = partnersService;
    }
    async findAll(req, type) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.partnersService.getOrganizationId(req.user.sub);
        return this.partnersService.findAll(orgId, type);
    }
    async create(req, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.partnersService.getOrganizationId(req.user.sub);
        return this.partnersService.create(orgId, dto);
    }
    async update(req, id, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.partnersService.getOrganizationId(req.user.sub);
        return this.partnersService.update(orgId, id, dto);
    }
    async remove(req, id) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.partnersService.getOrganizationId(req.user.sub);
        return this.partnersService.delete(orgId, id);
    }
    async getStats(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.partnersService.getOrganizationId(req.user.sub);
        return this.partnersService.getStats(orgId);
    }
};
exports.PartnersController = PartnersController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all partners' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Add a new partner' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof partner_dto_1.CreatePartnerDto !== "undefined" && partner_dto_1.CreatePartnerDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update partner details' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_c = typeof partner_dto_1.UpdatePartnerDto !== "undefined" && partner_dto_1.UpdatePartnerDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a partner' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get partner statistics' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "getStats", null);
exports.PartnersController = PartnersController = __decorate([
    (0, swagger_1.ApiTags)('Partners'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('partners'),
    __metadata("design:paramtypes", [typeof (_a = typeof partners_service_1.PartnersService !== "undefined" && partners_service_1.PartnersService) === "function" ? _a : Object])
], PartnersController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/partners/partners.module.ts"
/*!*****************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/partners/partners.module.ts ***!
  \*****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PartnersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const partners_service_1 = __webpack_require__(/*! ./partners.service */ "./apps/klypto-crm-nest-js/src/partners/partners.service.ts");
const partners_controller_1 = __webpack_require__(/*! ./partners.controller */ "./apps/klypto-crm-nest-js/src/partners/partners.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
let PartnersModule = class PartnersModule {
};
exports.PartnersModule = PartnersModule;
exports.PartnersModule = PartnersModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [partners_controller_1.PartnersController],
        providers: [partners_service_1.PartnersService],
        exports: [partners_service_1.PartnersService],
    })
], PartnersModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/partners/partners.service.ts"
/*!******************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/partners/partners.service.ts ***!
  \******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PartnersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let PartnersService = class PartnersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrganizationId(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { organizationId: true },
        });
        if (!user || !user.organizationId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return user.organizationId;
    }
    async findAll(organizationId, type) {
        return this.prisma.partner.findMany({
            where: {
                organizationId,
                ...(type && { type }),
            },
            orderBy: { name: 'asc' },
        });
    }
    async create(organizationId, dto) {
        return this.prisma.partner.create({
            data: { ...dto, organizationId },
        });
    }
    async update(organizationId, id, dto) {
        const partner = await this.prisma.partner.findFirst({
            where: { id, organizationId },
        });
        if (!partner)
            throw new common_1.NotFoundException('Partner not found');
        return this.prisma.partner.update({
            where: { id },
            data: dto,
        });
    }
    async delete(organizationId, id) {
        const partner = await this.prisma.partner.findFirst({
            where: { id, organizationId },
        });
        if (!partner)
            throw new common_1.NotFoundException('Partner not found');
        return this.prisma.partner.delete({ where: { id } });
    }
    async getStats(organizationId) {
        const [customers, vendors] = await Promise.all([
            this.prisma.partner.count({
                where: { organizationId, type: 'CUSTOMER' },
            }),
            this.prisma.partner.count({ where: { organizationId, type: 'VENDOR' } }),
        ]);
        return { customers, vendors };
    }
};
exports.PartnersService = PartnersService;
exports.PartnersService = PartnersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], PartnersService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/payroll/dto/payroll.dto.ts"
/*!****************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/payroll/dto/payroll.dto.ts ***!
  \****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProcessPayrollDto = exports.CreateSalaryStructureDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateSalaryStructureDto {
    employeeId;
    basicSalary;
    hra;
    allowances;
    deductions;
}
exports.CreateSalaryStructureDto = CreateSalaryStructureDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'clx...employeeId' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSalaryStructureDto.prototype, "employeeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 50000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateSalaryStructureDto.prototype, "basicSalary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 15000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateSalaryStructureDto.prototype, "hra", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateSalaryStructureDto.prototype, "allowances", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateSalaryStructureDto.prototype, "deductions", void 0);
class ProcessPayrollDto {
    month;
    year;
}
exports.ProcessPayrollDto = ProcessPayrollDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(12),
    __metadata("design:type", Number)
], ProcessPayrollDto.prototype, "month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2026 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(2024),
    __metadata("design:type", Number)
], ProcessPayrollDto.prototype, "year", void 0);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/payroll/payroll.controller.ts"
/*!*******************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/payroll/payroll.controller.ts ***!
  \*******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PayrollController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const payroll_service_1 = __webpack_require__(/*! ./payroll.service */ "./apps/klypto-crm-nest-js/src/payroll/payroll.service.ts");
const payroll_dto_1 = __webpack_require__(/*! ./dto/payroll.dto */ "./apps/klypto-crm-nest-js/src/payroll/dto/payroll.dto.ts");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
let PayrollController = class PayrollController {
    payrollService;
    constructor(payrollService) {
        this.payrollService = payrollService;
    }
    async getStats(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.payrollService.getOrganizationId(req.user.sub);
        return this.payrollService.getStats(orgId);
    }
    async findStructures(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.payrollService.getOrganizationId(req.user.sub);
        return this.payrollService.findStructures(orgId);
    }
    async upsertStructure(req, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.payrollService.getOrganizationId(req.user.sub);
        return this.payrollService.upsertStructure(orgId, dto);
    }
    async findAllRecords(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.payrollService.getOrganizationId(req.user.sub);
        return this.payrollService.findAllRecords(orgId);
    }
    async processPayroll(req, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.payrollService.getOrganizationId(req.user.sub);
        return this.payrollService.processPayroll(orgId, dto);
    }
};
exports.PayrollController = PayrollController;
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get payroll statistics for the current month' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PayrollController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)('structures'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all salary structures' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PayrollController.prototype, "findStructures", null);
__decorate([
    (0, common_1.Post)('structures'),
    (0, swagger_1.ApiOperation)({
        summary: 'Create or update a salary structure for an employee',
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof payroll_dto_1.CreateSalaryStructureDto !== "undefined" && payroll_dto_1.CreateSalaryStructureDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], PayrollController.prototype, "upsertStructure", null);
__decorate([
    (0, common_1.Get)('records'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all payroll records' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PayrollController.prototype, "findAllRecords", null);
__decorate([
    (0, common_1.Post)('process'),
    (0, swagger_1.ApiOperation)({ summary: 'Process payroll for a given month and year' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_c = typeof payroll_dto_1.ProcessPayrollDto !== "undefined" && payroll_dto_1.ProcessPayrollDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], PayrollController.prototype, "processPayroll", null);
exports.PayrollController = PayrollController = __decorate([
    (0, swagger_1.ApiTags)('Payroll'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('payroll'),
    __metadata("design:paramtypes", [typeof (_a = typeof payroll_service_1.PayrollService !== "undefined" && payroll_service_1.PayrollService) === "function" ? _a : Object])
], PayrollController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/payroll/payroll.module.ts"
/*!***************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/payroll/payroll.module.ts ***!
  \***************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PayrollModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const payroll_service_1 = __webpack_require__(/*! ./payroll.service */ "./apps/klypto-crm-nest-js/src/payroll/payroll.service.ts");
const payroll_controller_1 = __webpack_require__(/*! ./payroll.controller */ "./apps/klypto-crm-nest-js/src/payroll/payroll.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
let PayrollModule = class PayrollModule {
};
exports.PayrollModule = PayrollModule;
exports.PayrollModule = PayrollModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [payroll_controller_1.PayrollController],
        providers: [payroll_service_1.PayrollService],
        exports: [payroll_service_1.PayrollService],
    })
], PayrollModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/payroll/payroll.service.ts"
/*!****************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/payroll/payroll.service.ts ***!
  \****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PayrollService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let PayrollService = class PayrollService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrganizationId(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { organizationId: true },
        });
        if (!user || !user.organizationId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return user.organizationId;
    }
    async getStats(organizationId) {
        const now = new Date();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();
        const [structures, records, recordsThisMonth] = await Promise.all([
            this.prisma.salaryStructure.count({ where: { organizationId } }),
            this.prisma.payrollRecord.findMany({
                where: { organizationId, month, year },
                include: { employee: { select: { name: true } } },
            }),
            this.prisma.payrollRecord.findMany({
                where: { organizationId, month, year },
            }),
        ]);
        const totalNetPay = recordsThisMonth.reduce((sum, r) => sum + r.netPay, 0);
        const paidCount = recordsThisMonth.filter((r) => r.status === 'Paid').length;
        return {
            employeesOnPayroll: structures,
            totalNetPayThisMonth: totalNetPay,
            processedRecords: paidCount,
            pendingRecords: structures - paidCount,
            currentMonth: month,
            currentYear: year,
            recentRecords: records.slice(0, 5),
        };
    }
    async findStructures(organizationId) {
        return this.prisma.salaryStructure.findMany({
            where: { organizationId },
            include: {
                employee: {
                    select: {
                        id: true,
                        name: true,
                        code: true,
                        department: true,
                        role: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async upsertStructure(organizationId, dto) {
        return this.prisma.salaryStructure.upsert({
            where: { employeeId: dto.employeeId },
            create: {
                basicSalary: dto.basicSalary,
                hra: dto.hra,
                allowances: dto.allowances,
                deductions: dto.deductions,
                employee: { connect: { id: dto.employeeId } },
                organization: { connect: { id: organizationId } },
            },
            update: {
                basicSalary: dto.basicSalary,
                hra: dto.hra,
                allowances: dto.allowances,
                deductions: dto.deductions,
            },
            include: {
                employee: {
                    select: {
                        id: true,
                        name: true,
                        code: true,
                        department: true,
                        role: true,
                    },
                },
            },
        });
    }
    async findAllRecords(organizationId) {
        return this.prisma.payrollRecord.findMany({
            where: { organizationId },
            include: {
                employee: {
                    select: { id: true, name: true, code: true, department: true },
                },
            },
            orderBy: [{ year: 'desc' }, { month: 'desc' }],
        });
    }
    async processPayroll(organizationId, dto) {
        const structures = await this.prisma.salaryStructure.findMany({
            where: { organizationId },
            include: { employee: { select: { id: true, name: true } } },
        });
        if (structures.length === 0) {
            return [];
        }
        const records = [];
        for (const struct of structures) {
            const netPay = struct.basicSalary + struct.hra + struct.allowances - struct.deductions;
            const record = await this.prisma.payrollRecord.upsert({
                where: {
                    employeeId_month_year: {
                        employeeId: struct.employeeId,
                        month: dto.month,
                        year: dto.year,
                    },
                },
                create: {
                    employeeId: struct.employeeId,
                    month: dto.month,
                    year: dto.year,
                    netPay,
                    status: 'Paid',
                    organizationId,
                },
                update: { netPay, status: 'Paid' },
                include: { employee: { select: { id: true, name: true } } },
            });
            records.push(record);
        }
        return records;
    }
};
exports.PayrollService = PayrollService;
exports.PayrollService = PayrollService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], PayrollService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/performance/dto/performance.dto.ts"
/*!************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/performance/dto/performance.dto.ts ***!
  \************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePerformanceReviewDto = exports.CreatePerformanceReviewDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreatePerformanceReviewDto {
    employeeId;
    cycle;
    rating;
    feedback;
    status;
}
exports.CreatePerformanceReviewDto = CreatePerformanceReviewDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'clx...employeeId' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePerformanceReviewDto.prototype, "employeeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Q1 2026' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePerformanceReviewDto.prototype, "cycle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4.5 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], CreatePerformanceReviewDto.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Excellent teamwork and delivery.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePerformanceReviewDto.prototype, "feedback", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Complete' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePerformanceReviewDto.prototype, "status", void 0);
class UpdatePerformanceReviewDto extends (0, swagger_1.PartialType)(CreatePerformanceReviewDto) {
}
exports.UpdatePerformanceReviewDto = UpdatePerformanceReviewDto;


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/performance/performance.controller.ts"
/*!***************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/performance/performance.controller.ts ***!
  \***************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PerformanceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const performance_service_1 = __webpack_require__(/*! ./performance.service */ "./apps/klypto-crm-nest-js/src/performance/performance.service.ts");
const performance_dto_1 = __webpack_require__(/*! ./dto/performance.dto */ "./apps/klypto-crm-nest-js/src/performance/dto/performance.dto.ts");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
let PerformanceController = class PerformanceController {
    performanceService;
    constructor(performanceService) {
        this.performanceService = performanceService;
    }
    async findAll(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.performanceService.getOrganizationId(req.user.sub);
        return this.performanceService.findAll(orgId);
    }
    async create(req, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.performanceService.getOrganizationId(req.user.sub);
        return this.performanceService.create(orgId, dto);
    }
    async update(req, id, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.performanceService.getOrganizationId(req.user.sub);
        return this.performanceService.update(orgId, id, dto);
    }
};
exports.PerformanceController = PerformanceController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all performance reviews' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PerformanceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new performance review' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof performance_dto_1.CreatePerformanceReviewDto !== "undefined" && performance_dto_1.CreatePerformanceReviewDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], PerformanceController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a performance review' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_c = typeof performance_dto_1.UpdatePerformanceReviewDto !== "undefined" && performance_dto_1.UpdatePerformanceReviewDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], PerformanceController.prototype, "update", null);
exports.PerformanceController = PerformanceController = __decorate([
    (0, swagger_1.ApiTags)('Performance'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('performance'),
    __metadata("design:paramtypes", [typeof (_a = typeof performance_service_1.PerformanceService !== "undefined" && performance_service_1.PerformanceService) === "function" ? _a : Object])
], PerformanceController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/performance/performance.module.ts"
/*!***********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/performance/performance.module.ts ***!
  \***********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PerformanceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const performance_service_1 = __webpack_require__(/*! ./performance.service */ "./apps/klypto-crm-nest-js/src/performance/performance.service.ts");
const performance_controller_1 = __webpack_require__(/*! ./performance.controller */ "./apps/klypto-crm-nest-js/src/performance/performance.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
let PerformanceModule = class PerformanceModule {
};
exports.PerformanceModule = PerformanceModule;
exports.PerformanceModule = PerformanceModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [performance_controller_1.PerformanceController],
        providers: [performance_service_1.PerformanceService],
        exports: [performance_service_1.PerformanceService],
    })
], PerformanceModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/performance/performance.service.ts"
/*!************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/performance/performance.service.ts ***!
  \************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PerformanceService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let PerformanceService = class PerformanceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrganizationId(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { organizationId: true },
        });
        if (!user || !user.organizationId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return user.organizationId;
    }
    async findAll(organizationId) {
        return this.prisma.performanceReview.findMany({
            where: { organizationId },
            include: { employee: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async create(organizationId, dto) {
        return this.prisma.performanceReview.create({
            data: {
                ...dto,
                organizationId,
            },
            include: { employee: true },
        });
    }
    async update(organizationId, id, dto) {
        const review = await this.prisma.performanceReview.findFirst({
            where: { id, organizationId },
        });
        if (!review)
            throw new common_1.NotFoundException('Performance review not found');
        return this.prisma.performanceReview.update({
            where: { id },
            data: { ...dto },
            include: { employee: true },
        });
    }
};
exports.PerformanceService = PerformanceService;
exports.PerformanceService = PerformanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], PerformanceService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/policies/dto/policy.dto.ts"
/*!****************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/policies/dto/policy.dto.ts ***!
  \****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePolicyDto = exports.CreatePolicyDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreatePolicyDto {
    title;
    content;
    category;
}
exports.CreatePolicyDto = CreatePolicyDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Internet Usage Policy' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePolicyDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Employees must use internet for business purposes...',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePolicyDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'IT' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePolicyDto.prototype, "category", void 0);
class UpdatePolicyDto extends (0, swagger_1.PartialType)(CreatePolicyDto) {
}
exports.UpdatePolicyDto = UpdatePolicyDto;


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/policies/policies.controller.ts"
/*!*********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/policies/policies.controller.ts ***!
  \*********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PoliciesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const policies_service_1 = __webpack_require__(/*! ./policies.service */ "./apps/klypto-crm-nest-js/src/policies/policies.service.ts");
const policy_dto_1 = __webpack_require__(/*! ./dto/policy.dto */ "./apps/klypto-crm-nest-js/src/policies/dto/policy.dto.ts");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
let PoliciesController = class PoliciesController {
    policiesService;
    constructor(policiesService) {
        this.policiesService = policiesService;
    }
    getNormalizedRoles(roles = []) {
        return roles.map((role) => String(role).toUpperCase());
    }
    canManagePolicies(roles) {
        return ['SUPER_ADMIN', 'HR'].some((role) => roles.includes(role));
    }
    async findAll(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.policiesService.getOrganizationId(req.user.sub);
        return this.policiesService.findAll(orgId);
    }
    async findOne(req, id) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.policiesService.getOrganizationId(req.user.sub);
        return this.policiesService.findOne(orgId, id);
    }
    async create(req, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const roles = this.getNormalizedRoles(req.user.roles || []);
        if (!this.canManagePolicies(roles)) {
            throw new common_1.ForbiddenException('You do not have permission to create policies');
        }
        const orgId = await this.policiesService.getOrganizationId(req.user.sub);
        return this.policiesService.create(orgId, dto);
    }
    async update(req, id, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const roles = this.getNormalizedRoles(req.user.roles || []);
        if (!this.canManagePolicies(roles)) {
            throw new common_1.ForbiddenException('You do not have permission to update policies');
        }
        const orgId = await this.policiesService.getOrganizationId(req.user.sub);
        return this.policiesService.update(orgId, id, dto);
    }
    async remove(req, id) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const roles = this.getNormalizedRoles(req.user.roles || []);
        if (!this.canManagePolicies(roles)) {
            throw new common_1.ForbiddenException('You do not have permission to delete policies');
        }
        const orgId = await this.policiesService.getOrganizationId(req.user.sub);
        return this.policiesService.remove(orgId, id);
    }
};
exports.PoliciesController = PoliciesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all organization policies' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PoliciesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get policy details' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PoliciesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new policy' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof policy_dto_1.CreatePolicyDto !== "undefined" && policy_dto_1.CreatePolicyDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], PoliciesController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an existing policy' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_c = typeof policy_dto_1.UpdatePolicyDto !== "undefined" && policy_dto_1.UpdatePolicyDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], PoliciesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a policy' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PoliciesController.prototype, "remove", null);
exports.PoliciesController = PoliciesController = __decorate([
    (0, swagger_1.ApiTags)('Policies'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('policies'),
    __metadata("design:paramtypes", [typeof (_a = typeof policies_service_1.PoliciesService !== "undefined" && policies_service_1.PoliciesService) === "function" ? _a : Object])
], PoliciesController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/policies/policies.module.ts"
/*!*****************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/policies/policies.module.ts ***!
  \*****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PoliciesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const policies_service_1 = __webpack_require__(/*! ./policies.service */ "./apps/klypto-crm-nest-js/src/policies/policies.service.ts");
const policies_controller_1 = __webpack_require__(/*! ./policies.controller */ "./apps/klypto-crm-nest-js/src/policies/policies.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
let PoliciesModule = class PoliciesModule {
};
exports.PoliciesModule = PoliciesModule;
exports.PoliciesModule = PoliciesModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [policies_controller_1.PoliciesController],
        providers: [policies_service_1.PoliciesService],
        exports: [policies_service_1.PoliciesService],
    })
], PoliciesModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/policies/policies.service.ts"
/*!******************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/policies/policies.service.ts ***!
  \******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PoliciesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let PoliciesService = class PoliciesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrganizationId(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { organizationId: true },
        });
        if (!user || !user.organizationId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return user.organizationId;
    }
    async findAll(organizationId) {
        return this.prisma.policy.findMany({
            where: { organizationId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(organizationId, id) {
        const policy = await this.prisma.policy.findFirst({
            where: { id, organizationId },
        });
        if (!policy)
            throw new common_1.NotFoundException('Policy not found');
        return policy;
    }
    async create(organizationId, dto) {
        return this.prisma.policy.create({
            data: {
                title: dto.title,
                content: dto.content,
                category: dto.category || 'General',
                organization: { connect: { id: organizationId } },
            },
        });
    }
    async update(organizationId, id, dto) {
        const policy = await this.prisma.policy.findFirst({
            where: { id, organizationId },
        });
        if (!policy)
            throw new common_1.NotFoundException('Policy not found');
        return this.prisma.policy.update({
            where: { id },
            data: {
                ...(dto.title !== undefined ? { title: dto.title } : {}),
                ...(dto.content !== undefined ? { content: dto.content } : {}),
                ...(dto.category !== undefined ? { category: dto.category } : {}),
            },
        });
    }
    async remove(organizationId, id) {
        const policy = await this.prisma.policy.findFirst({
            where: { id, organizationId },
        });
        if (!policy)
            throw new common_1.NotFoundException('Policy not found');
        return this.prisma.policy.delete({
            where: { id },
        });
    }
};
exports.PoliciesService = PoliciesService;
exports.PoliciesService = PoliciesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], PoliciesService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts"
/*!*************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let PrismaModule = class PrismaModule {
};
exports.PrismaModule = PrismaModule;
exports.PrismaModule = PrismaModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaService],
        exports: [prisma_service_1.PrismaService],
    })
], PrismaModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts"
/*!**************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts ***!
  \**************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)()
], PrismaService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/projects/dto/project.dto.ts"
/*!*****************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/projects/dto/project.dto.ts ***!
  \*****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProjectTaskDto = exports.CreateProjectTaskDto = exports.UpdateProjectDto = exports.CreateProjectDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateProjectDto {
    name;
    description;
    status;
    managerId;
}
exports.CreateProjectDto = CreateProjectDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Website Redesign' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Refactoring the main customer portal with React 19',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Active', enum: ['Active', 'Completed'] }),
    (0, class_validator_1.IsEnum)(['Active', 'Completed']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user-clx...id', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "managerId", void 0);
class UpdateProjectDto extends (0, swagger_1.PartialType)(CreateProjectDto) {
}
exports.UpdateProjectDto = UpdateProjectDto;
class CreateProjectTaskDto {
    title;
    description;
    priority;
    status;
    dueDate;
    assigneeId;
    projectId;
}
exports.CreateProjectTaskDto = CreateProjectTaskDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fix Layout Issues' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProjectTaskDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Fix the mobile responsive layout for the checkout page',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProjectTaskDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Medium',
        enum: ['Low', 'Medium', 'High', 'Critical'],
    }),
    (0, class_validator_1.IsEnum)(['Low', 'Medium', 'High', 'Critical']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProjectTaskDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'todo',
        enum: ['todo', 'inprogress', 'review', 'done'],
    }),
    (0, class_validator_1.IsEnum)(['todo', 'inprogress', 'review', 'done']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProjectTaskDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-05-15T00:00:00Z' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProjectTaskDto.prototype, "dueDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user-clx...id', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProjectTaskDto.prototype, "assigneeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'project-clx...id', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProjectTaskDto.prototype, "projectId", void 0);
class UpdateProjectTaskDto extends (0, swagger_1.PartialType)(CreateProjectTaskDto) {
}
exports.UpdateProjectTaskDto = UpdateProjectTaskDto;


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/projects/projects.controller.ts"
/*!*********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/projects/projects.controller.ts ***!
  \*********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const projects_service_1 = __webpack_require__(/*! ./projects.service */ "./apps/klypto-crm-nest-js/src/projects/projects.service.ts");
const project_dto_1 = __webpack_require__(/*! ./dto/project.dto */ "./apps/klypto-crm-nest-js/src/projects/dto/project.dto.ts");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
let ProjectsController = class ProjectsController {
    projectsService;
    constructor(projectsService) {
        this.projectsService = projectsService;
    }
    normalizeRoles(roles = []) {
        return roles.map((role) => String(role).toUpperCase());
    }
    hasProjectManageAccess(roles) {
        return ['SUPER_ADMIN', 'ADMIN', 'MANAGER', 'HR'].some((role) => roles.includes(role));
    }
    async findAllProjects(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.projectsService.getOrganizationId(req.user.sub);
        const roles = this.normalizeRoles(req.user.roles || []);
        const canManage = this.hasProjectManageAccess(roles);
        return this.projectsService.findAllProjects(orgId, canManage ? undefined : req.user.sub);
    }
    async createProject(req, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const roles = this.normalizeRoles(req.user.roles || []);
        if (!this.hasProjectManageAccess(roles)) {
            throw new common_1.ForbiddenException('Only project managers, HR, or admins can create projects');
        }
        const orgId = await this.projectsService.getOrganizationId(req.user.sub);
        return this.projectsService.createProject(orgId, req.user.sub, dto);
    }
    async updateProject(req, id, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const roles = this.normalizeRoles(req.user.roles || []);
        if (!this.hasProjectManageAccess(roles)) {
            throw new common_1.ForbiddenException('Only project managers, HR, or admins can update projects');
        }
        const orgId = await this.projectsService.getOrganizationId(req.user.sub);
        return this.projectsService.updateProject(orgId, id, dto);
    }
    async findAllTasks(req, projectId) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.projectsService.getOrganizationId(req.user.sub);
        const roles = this.normalizeRoles(req.user.roles || []);
        const canManage = this.hasProjectManageAccess(roles);
        return this.projectsService.findAllTasks(orgId, projectId, canManage ? undefined : req.user.sub);
    }
    async createTask(req, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const roles = this.normalizeRoles(req.user.roles || []);
        const orgId = await this.projectsService.getOrganizationId(req.user.sub);
        if (!this.hasProjectManageAccess(roles)) {
            if (dto.projectId) {
                const myProjects = await this.projectsService.findAllProjects(orgId, req.user.sub);
                const canCreateInProject = myProjects.some((project) => String(project.id) === String(dto.projectId));
                if (!canCreateInProject) {
                    throw new common_1.ForbiddenException('You can only create tasks in projects assigned to you');
                }
            }
            if (dto.assigneeId && dto.assigneeId !== req.user.sub) {
                throw new common_1.ForbiddenException('You can only create tasks assigned to yourself');
            }
            return this.projectsService.createTask(orgId, {
                ...dto,
                assigneeId: req.user.sub,
            });
        }
        return this.projectsService.createTask(orgId, dto);
    }
    async updateTask(req, id, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.projectsService.getOrganizationId(req.user.sub);
        const roles = this.normalizeRoles(req.user.roles || []);
        const canManage = this.hasProjectManageAccess(roles);
        if (!canManage) {
            const existingTask = await this.projectsService.findTaskById(orgId, id);
            if (!existingTask)
                throw new common_1.NotFoundException('Task not found');
            if (existingTask.assigneeId !== req.user.sub) {
                throw new common_1.ForbiddenException('You can only update your assigned tasks');
            }
        }
        return this.projectsService.updateTask(orgId, id, dto);
    }
    async removeTask(req, id) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const roles = this.normalizeRoles(req.user.roles || []);
        if (!this.hasProjectManageAccess(roles)) {
            throw new common_1.ForbiddenException('Only project managers, HR, or admins can delete tasks');
        }
        const orgId = await this.projectsService.getOrganizationId(req.user.sub);
        return this.projectsService.deleteTask(orgId, id);
    }
};
exports.ProjectsController = ProjectsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all projects' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "findAllProjects", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new project' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof project_dto_1.CreateProjectDto !== "undefined" && project_dto_1.CreateProjectDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "createProject", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a project' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_c = typeof project_dto_1.UpdateProjectDto !== "undefined" && project_dto_1.UpdateProjectDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "updateProject", null);
__decorate([
    (0, common_1.Get)('tasks'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tasks' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "findAllTasks", null);
__decorate([
    (0, common_1.Post)('tasks'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new task' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_d = typeof project_dto_1.CreateProjectTaskDto !== "undefined" && project_dto_1.CreateProjectTaskDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "createTask", null);
__decorate([
    (0, common_1.Patch)('tasks/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a task' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_e = typeof project_dto_1.UpdateProjectTaskDto !== "undefined" && project_dto_1.UpdateProjectTaskDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "updateTask", null);
__decorate([
    (0, common_1.Delete)('tasks/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a task' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "removeTask", null);
exports.ProjectsController = ProjectsController = __decorate([
    (0, swagger_1.ApiTags)('Projects'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('projects'),
    __metadata("design:paramtypes", [typeof (_a = typeof projects_service_1.ProjectsService !== "undefined" && projects_service_1.ProjectsService) === "function" ? _a : Object])
], ProjectsController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/projects/projects.module.ts"
/*!*****************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/projects/projects.module.ts ***!
  \*****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const projects_service_1 = __webpack_require__(/*! ./projects.service */ "./apps/klypto-crm-nest-js/src/projects/projects.service.ts");
const projects_controller_1 = __webpack_require__(/*! ./projects.controller */ "./apps/klypto-crm-nest-js/src/projects/projects.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
let ProjectsModule = class ProjectsModule {
};
exports.ProjectsModule = ProjectsModule;
exports.ProjectsModule = ProjectsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [projects_controller_1.ProjectsController],
        providers: [projects_service_1.ProjectsService],
        exports: [projects_service_1.ProjectsService],
    })
], ProjectsModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/projects/projects.service.ts"
/*!******************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/projects/projects.service.ts ***!
  \******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let ProjectsService = class ProjectsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async resolveManagerId(organizationId, managerId) {
        if (!managerId)
            return null;
        const manager = await this.prisma.user.findFirst({
            where: { id: managerId, organizationId },
            select: { id: true },
        });
        if (!manager) {
            throw new common_1.NotFoundException('Selected project manager not found in organization');
        }
        return manager.id;
    }
    async getOrganizationId(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { organizationId: true },
        });
        if (!user || !user.organizationId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return user.organizationId;
    }
    async findAllProjects(organizationId, assigneeId) {
        return this.prisma.project.findMany({
            where: {
                organizationId,
                ...(assigneeId
                    ? {
                        tasks: {
                            some: { assigneeId },
                        },
                    }
                    : {}),
            },
            include: {
                manager: { select: { id: true, fullName: true } },
                createdBy: { select: { id: true, fullName: true } },
                _count: { select: { tasks: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async createProject(organizationId, creatorUserId, dto) {
        const managerId = await this.resolveManagerId(organizationId, dto.managerId);
        return this.prisma.project.create({
            data: {
                name: dto.name,
                description: dto.description,
                status: dto.status,
                organizationId,
                createdById: creatorUserId,
                managerId,
            },
            include: {
                manager: { select: { id: true, fullName: true } },
                createdBy: { select: { id: true, fullName: true } },
                _count: { select: { tasks: true } },
            },
        });
    }
    async updateProject(organizationId, id, dto) {
        const project = await this.prisma.project.findFirst({
            where: { id, organizationId },
        });
        if (!project)
            throw new common_1.NotFoundException('Project not found');
        const managerId = await this.resolveManagerId(organizationId, dto.managerId);
        return this.prisma.project.update({
            where: { id },
            data: {
                ...(dto.name !== undefined ? { name: dto.name } : {}),
                ...(dto.description !== undefined
                    ? { description: dto.description }
                    : {}),
                ...(dto.status !== undefined ? { status: dto.status } : {}),
                ...(dto.managerId !== undefined ? { managerId } : {}),
            },
            include: {
                manager: { select: { id: true, fullName: true } },
                createdBy: { select: { id: true, fullName: true } },
                _count: { select: { tasks: true } },
            },
        });
    }
    async findAllTasks(organizationId, projectId, assigneeId) {
        return this.prisma.projectTask.findMany({
            where: {
                organizationId,
                ...(projectId && { projectId }),
                ...(assigneeId && { assigneeId }),
            },
            include: {
                assignee: { select: { id: true, fullName: true } },
                project: { select: { name: true } },
            },
            orderBy: { updatedAt: 'desc' },
        });
    }
    async findTaskById(organizationId, id) {
        return this.prisma.projectTask.findFirst({
            where: { id, organizationId },
        });
    }
    async createTask(organizationId, dto) {
        return this.prisma.projectTask.create({
            data: { ...dto, organizationId },
            include: { assignee: { select: { id: true, fullName: true } } },
        });
    }
    async updateTask(organizationId, id, dto) {
        const task = await this.prisma.projectTask.findFirst({
            where: { id, organizationId },
        });
        if (!task)
            throw new common_1.NotFoundException('Task not found');
        return this.prisma.projectTask.update({
            where: { id },
            data: dto,
            include: { assignee: { select: { id: true, fullName: true } } },
        });
    }
    async deleteTask(organizationId, id) {
        const task = await this.prisma.projectTask.findFirst({
            where: { id, organizationId },
        });
        if (!task)
            throw new common_1.NotFoundException('Task not found');
        return this.prisma.projectTask.delete({ where: { id } });
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], ProjectsService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/rbac/dto/rbac.dto.ts"
/*!**********************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/rbac/dto/rbac.dto.ts ***!
  \**********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserWithRolesDto = exports.UserAccessDto = exports.UserRolesResponseDto = exports.UserBasicDto = exports.UserRoleItemDto = exports.MessageResponseDto = exports.AssignRoleResponseDto = exports.RoleAssignmentDto = exports.RoleAssignmentRoleDto = exports.RoleAssignmentUserDto = exports.RoleResponseDto = exports.UpdateRoleDto = exports.AssignRoleDto = exports.CreateRoleDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateRoleDto {
    name;
    description;
    dashboardModules;
}
exports.CreateRoleDto = CreateRoleDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'SALES_MANAGER',
        description: 'Unique role name (stored as uppercase)',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Role for managing sales operations',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['dashboard', 'hrms', 'leave'],
        required: false,
        description: 'Dashboard modules assigned to the role',
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateRoleDto.prototype, "dashboardModules", void 0);
class AssignRoleDto {
    userId;
    roleName;
}
exports.AssignRoleDto = AssignRoleDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'ckxxxxxxxxxxxxxxxxxxxxxxx',
        description: 'User ID receiving the role',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AssignRoleDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'SALES_MANAGER',
        description: 'Role name to assign',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AssignRoleDto.prototype, "roleName", void 0);
class UpdateRoleDto {
    name;
    description;
    dashboardModules;
}
exports.UpdateRoleDto = UpdateRoleDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'SALES_MANAGER',
        required: false,
        description: 'Updated role name (stored as uppercase)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], UpdateRoleDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Updated role description',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRoleDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['dashboard', 'hrms', 'leave'],
        required: false,
        description: 'Updated dashboard modules assigned to the role',
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateRoleDto.prototype, "dashboardModules", void 0);
class RoleResponseDto {
    id;
    name;
    description;
    isSystem;
    assignedUsersCount;
    dashboardModules;
    createdAt;
    updatedAt;
}
exports.RoleResponseDto = RoleResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ckxxxxxxxxxxxxxxxxxxxxxxx' }),
    __metadata("design:type", String)
], RoleResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SALES_MANAGER' }),
    __metadata("design:type", String)
], RoleResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Role for managing sales operations',
        nullable: true,
    }),
    __metadata("design:type", Object)
], RoleResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], RoleResponseDto.prototype, "isSystem", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 12 }),
    __metadata("design:type", Number)
], RoleResponseDto.prototype, "assignedUsersCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['dashboard', 'hrms', 'leave'],
        type: [String],
    }),
    __metadata("design:type", Array)
], RoleResponseDto.prototype, "dashboardModules", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-01-01T10:00:00.000Z' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], RoleResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-01-02T10:00:00.000Z' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], RoleResponseDto.prototype, "updatedAt", void 0);
class RoleAssignmentUserDto {
    id;
    email;
    fullName;
}
exports.RoleAssignmentUserDto = RoleAssignmentUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ckxxxxxxxxxxxxxxxxxxxxxxx' }),
    __metadata("design:type", String)
], RoleAssignmentUserDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john.doe@company.com' }),
    __metadata("design:type", String)
], RoleAssignmentUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe' }),
    __metadata("design:type", String)
], RoleAssignmentUserDto.prototype, "fullName", void 0);
class RoleAssignmentRoleDto {
    id;
    name;
    description;
    isSystem;
    createdAt;
    updatedAt;
}
exports.RoleAssignmentRoleDto = RoleAssignmentRoleDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ckxxxxxxxxxxxxxxxxxxxxxxx' }),
    __metadata("design:type", String)
], RoleAssignmentRoleDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SALES_MANAGER' }),
    __metadata("design:type", String)
], RoleAssignmentRoleDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Role for managing sales operations',
        nullable: true,
    }),
    __metadata("design:type", Object)
], RoleAssignmentRoleDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], RoleAssignmentRoleDto.prototype, "isSystem", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-01-01T10:00:00.000Z' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], RoleAssignmentRoleDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-01-02T10:00:00.000Z' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], RoleAssignmentRoleDto.prototype, "updatedAt", void 0);
class RoleAssignmentDto {
    id;
    userId;
    roleId;
    assignedById;
    createdAt;
    updatedAt;
    user;
    role;
}
exports.RoleAssignmentDto = RoleAssignmentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ckxxxxxxxxxxxxxxxxxxxxxxx' }),
    __metadata("design:type", String)
], RoleAssignmentDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ckxxxxxxxxxxxxxxxxxxxxxxx' }),
    __metadata("design:type", String)
], RoleAssignmentDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ckxxxxxxxxxxxxxxxxxxxxxxx' }),
    __metadata("design:type", String)
], RoleAssignmentDto.prototype, "roleId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ckxxxxxxxxxxxxxxxxxxxxxxx' }),
    __metadata("design:type", String)
], RoleAssignmentDto.prototype, "assignedById", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-01-01T10:00:00.000Z' }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], RoleAssignmentDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-01-02T10:00:00.000Z' }),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], RoleAssignmentDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: RoleAssignmentUserDto }),
    __metadata("design:type", RoleAssignmentUserDto)
], RoleAssignmentDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: RoleAssignmentRoleDto }),
    __metadata("design:type", RoleAssignmentRoleDto)
], RoleAssignmentDto.prototype, "role", void 0);
class AssignRoleResponseDto {
    message;
    assignment;
}
exports.AssignRoleResponseDto = AssignRoleResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Role assigned successfully' }),
    __metadata("design:type", String)
], AssignRoleResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: RoleAssignmentDto }),
    __metadata("design:type", RoleAssignmentDto)
], AssignRoleResponseDto.prototype, "assignment", void 0);
class MessageResponseDto {
    message;
}
exports.MessageResponseDto = MessageResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Role deleted successfully' }),
    __metadata("design:type", String)
], MessageResponseDto.prototype, "message", void 0);
class UserRoleItemDto {
    assignmentId;
    roleId;
    roleName;
    description;
    isSystem;
    dashboardModules;
    assignedAt;
    assignedBy;
}
exports.UserRoleItemDto = UserRoleItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ckxxxxxxxxxxxxxxxxxxxxxxx' }),
    __metadata("design:type", String)
], UserRoleItemDto.prototype, "assignmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ckxxxxxxxxxxxxxxxxxxxxxxx' }),
    __metadata("design:type", String)
], UserRoleItemDto.prototype, "roleId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SALES_MANAGER' }),
    __metadata("design:type", String)
], UserRoleItemDto.prototype, "roleName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Role for managing sales operations',
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserRoleItemDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], UserRoleItemDto.prototype, "isSystem", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['dashboard', 'hrms', 'leave'],
        type: [String],
    }),
    __metadata("design:type", Array)
], UserRoleItemDto.prototype, "dashboardModules", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-01-01T10:00:00.000Z' }),
    __metadata("design:type", typeof (_g = typeof Date !== "undefined" && Date) === "function" ? _g : Object)
], UserRoleItemDto.prototype, "assignedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: RoleAssignmentUserDto, nullable: true }),
    __metadata("design:type", Object)
], UserRoleItemDto.prototype, "assignedBy", void 0);
class UserBasicDto {
    id;
    email;
    fullName;
}
exports.UserBasicDto = UserBasicDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ckxxxxxxxxxxxxxxxxxxxxxxx' }),
    __metadata("design:type", String)
], UserBasicDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john.doe@company.com' }),
    __metadata("design:type", String)
], UserBasicDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe' }),
    __metadata("design:type", String)
], UserBasicDto.prototype, "fullName", void 0);
class UserRolesResponseDto {
    user;
    roles;
}
exports.UserRolesResponseDto = UserRolesResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: UserBasicDto }),
    __metadata("design:type", UserBasicDto)
], UserRolesResponseDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [UserRoleItemDto] }),
    __metadata("design:type", Array)
], UserRolesResponseDto.prototype, "roles", void 0);
class UserAccessDto {
    isSuperAdmin;
    canManageUsers;
    canManageRbac;
    canViewDashboard;
    dashboardModules;
}
exports.UserAccessDto = UserAccessDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], UserAccessDto.prototype, "isSuperAdmin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], UserAccessDto.prototype, "canManageUsers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], UserAccessDto.prototype, "canManageRbac", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], UserAccessDto.prototype, "canViewDashboard", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['dashboard', 'hrms', 'leave'],
        type: [String],
    }),
    __metadata("design:type", Array)
], UserAccessDto.prototype, "dashboardModules", void 0);
class UserWithRolesDto {
    id;
    email;
    fullName;
    organizationId;
    organizationName;
    isActive;
    roles;
    dashboardModules;
    access;
    createdAt;
}
exports.UserWithRolesDto = UserWithRolesDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ckxxxxxxxxxxxxxxxxxxxxxxx' }),
    __metadata("design:type", String)
], UserWithRolesDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john.doe@company.com' }),
    __metadata("design:type", String)
], UserWithRolesDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe' }),
    __metadata("design:type", String)
], UserWithRolesDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ckxxxxxxxxxxxxxxxxxxxxxxx' }),
    __metadata("design:type", String)
], UserWithRolesDto.prototype, "organizationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Klypto Corp' }),
    __metadata("design:type", String)
], UserWithRolesDto.prototype, "organizationName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], UserWithRolesDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], example: ['EMPLOYEE'] }),
    __metadata("design:type", Array)
], UserWithRolesDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], example: ['dashboard', 'hrms', 'leave'] }),
    __metadata("design:type", Array)
], UserWithRolesDto.prototype, "dashboardModules", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: UserAccessDto }),
    __metadata("design:type", UserAccessDto)
], UserWithRolesDto.prototype, "access", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-01-01T10:00:00.000Z' }),
    __metadata("design:type", typeof (_h = typeof Date !== "undefined" && Date) === "function" ? _h : Object)
], UserWithRolesDto.prototype, "createdAt", void 0);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/rbac/rbac.controller.ts"
/*!*************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/rbac/rbac.controller.ts ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RbacController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
const roles_decorator_1 = __webpack_require__(/*! ../auth/roles/roles.decorator */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.decorator.ts");
const system_role_enum_1 = __webpack_require__(/*! ../auth/roles/system-role.enum */ "./apps/klypto-crm-nest-js/src/auth/roles/system-role.enum.ts");
const rbac_dto_1 = __webpack_require__(/*! ./dto/rbac.dto */ "./apps/klypto-crm-nest-js/src/rbac/dto/rbac.dto.ts");
const rbac_service_1 = __webpack_require__(/*! ./rbac.service */ "./apps/klypto-crm-nest-js/src/rbac/rbac.service.ts");
let RbacController = class RbacController {
    rbacService;
    constructor(rbacService) {
        this.rbacService = rbacService;
    }
    createRole(dto) {
        return this.rbacService.createRole(dto);
    }
    listRoles() {
        return this.rbacService.listRoles();
    }
    listDashboardModules() {
        return this.rbacService.listDashboardModules();
    }
    updateRole(roleId, dto) {
        return this.rbacService.updateRole(roleId, dto);
    }
    deleteRole(roleId) {
        return this.rbacService.deleteRole(roleId);
    }
    assignRole(dto, req) {
        const assignedById = req.user?.sub;
        if (!assignedById) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return this.rbacService.assignRole(dto, assignedById);
    }
    getUserRoles(userId) {
        return this.rbacService.getUserRoles(userId);
    }
    listUsersWithRoles() {
        return this.rbacService.listUsersWithRoles();
    }
};
exports.RbacController = RbacController;
__decorate([
    (0, common_1.Post)('roles'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new role (Super Admin only)' }),
    (0, swagger_1.ApiBody)({ type: rbac_dto_1.CreateRoleDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Role created successfully',
        type: rbac_dto_1.RoleResponseDto,
    }),
    (0, swagger_1.ApiConflictResponse)({ description: 'Role already exists' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden resource' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof rbac_dto_1.CreateRoleDto !== "undefined" && rbac_dto_1.CreateRoleDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], RbacController.prototype, "createRole", null);
__decorate([
    (0, common_1.Get)('roles'),
    (0, swagger_1.ApiOperation)({ summary: 'List all roles (Super Admin only)' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Roles fetched successfully',
        type: [rbac_dto_1.RoleResponseDto],
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden resource' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RbacController.prototype, "listRoles", null);
__decorate([
    (0, common_1.Get)('dashboard-modules'),
    (0, swagger_1.ApiOperation)({
        summary: 'List available dashboard modules (Super Admin only)',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Dashboard modules fetched successfully',
        type: [String],
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden resource' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RbacController.prototype, "listDashboardModules", null);
__decorate([
    (0, common_1.Patch)('roles/:roleId'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an existing role (Super Admin only)' }),
    (0, swagger_1.ApiBody)({ type: rbac_dto_1.UpdateRoleDto }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Role updated successfully',
        type: rbac_dto_1.RoleResponseDto,
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Role not found' }),
    (0, swagger_1.ApiConflictResponse)({ description: 'Role already exists or immutable' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden resource' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    __param(0, (0, common_1.Param)('roleId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof rbac_dto_1.UpdateRoleDto !== "undefined" && rbac_dto_1.UpdateRoleDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], RbacController.prototype, "updateRole", null);
__decorate([
    (0, common_1.Delete)('roles/:roleId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a role (Super Admin only)' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Role deleted successfully',
        type: rbac_dto_1.MessageResponseDto,
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Role not found' }),
    (0, swagger_1.ApiConflictResponse)({ description: 'Role cannot be deleted' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden resource' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    __param(0, (0, common_1.Param)('roleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RbacController.prototype, "deleteRole", null);
__decorate([
    (0, common_1.Post)('roles/assign'),
    (0, swagger_1.ApiOperation)({ summary: 'Assign role to user (Super Admin only)' }),
    (0, swagger_1.ApiBody)({ type: rbac_dto_1.AssignRoleDto }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Role assigned successfully',
        type: rbac_dto_1.AssignRoleResponseDto,
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'User or role not found' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden resource' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Invalid user context' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof rbac_dto_1.AssignRoleDto !== "undefined" && rbac_dto_1.AssignRoleDto) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", void 0)
], RbacController.prototype, "assignRole", null);
__decorate([
    (0, common_1.Get)('users/:userId/roles'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all roles for a user (Super Admin only)' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'User roles fetched successfully',
        type: rbac_dto_1.UserRolesResponseDto,
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'User not found' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden resource' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RbacController.prototype, "getUserRoles", null);
__decorate([
    (0, common_1.Get)('users'),
    (0, swagger_1.ApiOperation)({
        summary: 'List all users with roles and access (Super Admin only)',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Users fetched successfully',
        type: [rbac_dto_1.UserWithRolesDto],
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden resource' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RbacController.prototype, "listUsersWithRoles", null);
exports.RbacController = RbacController = __decorate([
    (0, swagger_1.ApiTags)('RBAC'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(system_role_enum_1.SystemRole.SUPER_ADMIN),
    (0, common_1.Controller)('rbac'),
    __metadata("design:paramtypes", [typeof (_a = typeof rbac_service_1.RbacService !== "undefined" && rbac_service_1.RbacService) === "function" ? _a : Object])
], RbacController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/rbac/rbac.module.ts"
/*!*********************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/rbac/rbac.module.ts ***!
  \*********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RbacModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_module_1 = __webpack_require__(/*! ../auth/auth.module */ "./apps/klypto-crm-nest-js/src/auth/auth.module.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
const rbac_controller_1 = __webpack_require__(/*! ./rbac.controller */ "./apps/klypto-crm-nest-js/src/rbac/rbac.controller.ts");
const rbac_service_1 = __webpack_require__(/*! ./rbac.service */ "./apps/klypto-crm-nest-js/src/rbac/rbac.service.ts");
let RbacModule = class RbacModule {
};
exports.RbacModule = RbacModule;
exports.RbacModule = RbacModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule],
        controllers: [rbac_controller_1.RbacController],
        providers: [rbac_service_1.RbacService, roles_guard_1.RolesGuard],
    })
], RbacModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/rbac/rbac.service.ts"
/*!**********************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/rbac/rbac.service.ts ***!
  \**********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RbacService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const system_role_enum_1 = __webpack_require__(/*! ../auth/roles/system-role.enum */ "./apps/klypto-crm-nest-js/src/auth/roles/system-role.enum.ts");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
const DEFAULT_DASHBOARD_MODULES = [
    'dashboard',
    'leads',
    'erp',
    'projects',
    'recruitment',
    'grievances',
    'payroll',
    'hrms',
    'leave',
    'employees',
    'settings',
    'roles-access',
];
const DASHBOARD_MODULE_LABELS = {
    dashboard: 'Dashboard',
    leads: 'Leads',
    erp: 'ERP Portal',
    projects: 'Projects',
    recruitment: 'Recruitment',
    grievances: 'Grievances',
    payroll: 'Payroll',
    hrms: 'HR',
    leave: 'Leave',
    employees: 'Employees',
    settings: 'Settings',
    'roles-access': 'Roles & Access',
};
let RbacService = class RbacService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createRole(dto) {
        const roleName = dto.name.trim().toUpperCase();
        if (roleName === system_role_enum_1.SystemRole.ADMIN) {
            throw new common_1.ConflictException('ADMIN role is deprecated and cannot be used');
        }
        const dashboardModules = this.normalizeDashboardModules(dto.dashboardModules);
        const existingRole = await this.prisma.role.findUnique({
            where: { name: roleName },
        });
        if (existingRole) {
            throw new common_1.ConflictException('Role already exists');
        }
        return this.prisma.role.create({
            data: {
                name: roleName,
                description: dto.description,
                isSystem: false,
                dashboardModules,
            },
        });
    }
    async listRoles() {
        const roles = await this.prisma.role.findMany({
            where: {
                name: {
                    not: system_role_enum_1.SystemRole.ADMIN,
                },
            },
            orderBy: { createdAt: 'asc' },
            include: {
                _count: {
                    select: { assignments: true },
                },
            },
        });
        return roles.map((role) => ({
            id: role.id,
            name: role.name,
            description: role.description,
            isSystem: role.isSystem,
            assignedUsersCount: role._count.assignments,
            dashboardModules: role.dashboardModules,
            createdAt: role.createdAt,
            updatedAt: role.updatedAt,
        }));
    }
    listDashboardModules() {
        return DEFAULT_DASHBOARD_MODULES.map((key) => ({
            key,
            label: DASHBOARD_MODULE_LABELS[key] ?? key,
            description: this.getDashboardModuleDescription(key),
        }));
    }
    async updateRole(roleId, dto) {
        const existingRole = await this.prisma.role.findUnique({
            where: { id: roleId },
        });
        if (!existingRole) {
            throw new common_1.NotFoundException('Role not found');
        }
        const hasNameUpdate = typeof dto.name === 'string' && dto.name.trim().length > 0;
        const hasDescriptionUpdate = typeof dto.description === 'string';
        const hasModulesUpdate = Array.isArray(dto.dashboardModules);
        if (!hasNameUpdate && !hasDescriptionUpdate && !hasModulesUpdate) {
            throw new common_1.BadRequestException('Provide name, description or dashboard modules to update');
        }
        const nextName = hasNameUpdate
            ? dto.name.trim().toUpperCase()
            : existingRole.name;
        if (nextName === system_role_enum_1.SystemRole.ADMIN) {
            throw new common_1.ConflictException('ADMIN role is deprecated and cannot be used');
        }
        if (existingRole.isSystem &&
            hasNameUpdate &&
            nextName !== existingRole.name) {
            throw new common_1.ConflictException('System role name cannot be changed');
        }
        const dashboardModules = hasModulesUpdate
            ? this.normalizeDashboardModules(dto.dashboardModules)
            : existingRole.dashboardModules;
        if (hasNameUpdate && nextName !== existingRole.name) {
            const conflictingRole = await this.prisma.role.findUnique({
                where: { name: nextName },
            });
            if (conflictingRole && conflictingRole.id !== roleId) {
                throw new common_1.ConflictException('Role already exists');
            }
        }
        return this.prisma.role
            .update({
            where: { id: roleId },
            data: {
                name: nextName,
                description: hasDescriptionUpdate
                    ? dto.description
                    : existingRole.description,
                dashboardModules,
            },
            include: {
                _count: {
                    select: { assignments: true },
                },
            },
        })
            .then((role) => ({
            id: role.id,
            name: role.name,
            description: role.description,
            isSystem: role.isSystem,
            assignedUsersCount: role._count.assignments,
            dashboardModules: role.dashboardModules,
            createdAt: role.createdAt,
            updatedAt: role.updatedAt,
        }));
    }
    async deleteRole(roleId) {
        const existingRole = await this.prisma.role.findUnique({
            where: { id: roleId },
            include: {
                _count: {
                    select: { assignments: true },
                },
            },
        });
        if (!existingRole) {
            throw new common_1.NotFoundException('Role not found');
        }
        if (existingRole.isSystem) {
            throw new common_1.ConflictException('System roles cannot be deleted');
        }
        if (existingRole._count.assignments > 0) {
            throw new common_1.ConflictException('Role is assigned to users and cannot be deleted');
        }
        await this.prisma.role.delete({ where: { id: roleId } });
        return { message: 'Role deleted successfully' };
    }
    async assignRole(dto, assignedById) {
        const roleName = dto.roleName.trim().toUpperCase();
        if (roleName === system_role_enum_1.SystemRole.ADMIN) {
            throw new common_1.ConflictException('ADMIN role is deprecated and cannot be assigned');
        }
        if (roleName === system_role_enum_1.SystemRole.SUPER_ADMIN) {
            const existingSuperAdminAssignment = await this.prisma.userRole.findFirst({
                where: {
                    role: { name: system_role_enum_1.SystemRole.SUPER_ADMIN },
                },
                select: { userId: true },
            });
            if (existingSuperAdminAssignment &&
                existingSuperAdminAssignment.userId !== dto.userId) {
                throw new common_1.ConflictException('A Super Admin already exists. Only one Super Admin is allowed.');
            }
        }
        const user = await this.prisma.user.findUnique({
            where: { id: dto.userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const role = await this.prisma.role.findUnique({
            where: { name: roleName },
        });
        if (!role) {
            throw new common_1.NotFoundException('Role not found');
        }
        const assignment = await this.prisma.userRole.upsert({
            where: {
                userId_roleId: {
                    userId: user.id,
                    roleId: role.id,
                },
            },
            update: {
                assignedById,
            },
            create: {
                userId: user.id,
                roleId: role.id,
                assignedById,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        fullName: true,
                    },
                },
                role: true,
            },
        });
        return {
            message: 'Role assigned successfully',
            assignment,
        };
    }
    async getUserRoles(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: {
                roleAssignments: {
                    include: {
                        role: true,
                        assignedBy: {
                            select: {
                                id: true,
                                email: true,
                                fullName: true,
                            },
                        },
                    },
                },
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return {
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
            },
            roles: user.roleAssignments.map((assignment) => ({
                assignmentId: assignment.id,
                roleId: assignment.role.id,
                roleName: assignment.role.name,
                description: assignment.role.description,
                isSystem: assignment.role.isSystem,
                dashboardModules: assignment.role.dashboardModules,
                assignedAt: assignment.createdAt,
                assignedBy: assignment.assignedBy,
            })),
        };
    }
    async listUsersWithRoles() {
        const users = await this.prisma.user.findMany({
            include: {
                organization: {
                    select: {
                        name: true,
                    },
                },
                roleAssignments: {
                    include: {
                        role: {
                            select: {
                                name: true,
                                dashboardModules: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
        return users.map((user) => {
            const roles = user.roleAssignments.map((assignment) => assignment.role.name);
            const hasSuperAdmin = roles.includes(system_role_enum_1.SystemRole.SUPER_ADMIN);
            return {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                organizationId: user.organizationId,
                organizationName: user.organization.name,
                isActive: user.isActive,
                roles,
                dashboardModules: [
                    ...new Set(user.roleAssignments.flatMap((assignment) => assignment.role.dashboardModules || [])),
                ],
                access: {
                    isSuperAdmin: hasSuperAdmin,
                    canManageUsers: hasSuperAdmin,
                    canManageRbac: hasSuperAdmin,
                    canViewDashboard: hasSuperAdmin || roles.length > 0,
                    dashboardModules: [
                        ...new Set(user.roleAssignments.flatMap((assignment) => assignment.role.dashboardModules || [])),
                    ],
                },
                createdAt: user.createdAt,
            };
        });
    }
    getDashboardModuleDescription(key) {
        switch (key) {
            case 'dashboard':
                return 'Executive summary cards and insights';
            case 'leads':
                return 'Lead and pipeline tracking';
            case 'erp':
                return 'Finance, procurement, and ERP workflows';
            case 'recruitment':
                return 'Hiring and assessment workflows';
            case 'grievances':
                return 'Employee grievance management';
            case 'payroll':
                return 'Salary and compensation management';
            case 'hrms':
                return 'HR overview and operations';
            case 'leave':
                return 'Leave requests and approvals';
            case 'employees':
                return 'Employee master and directory';
            case 'settings':
                return 'Personal account and preferences';
            case 'roles-access':
                return 'Role and access administration';
            default:
                return 'Dashboard module';
        }
    }
    normalizeDashboardModules(modules) {
        const normalized = [
            ...new Set((modules ?? []).map((module) => module.trim()).filter(Boolean)),
        ];
        if (!normalized.includes('dashboard')) {
            normalized.unshift('dashboard');
        }
        return normalized;
    }
};
exports.RbacService = RbacService;
exports.RbacService = RbacService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], RbacService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/realtime/attendance.gateway.ts"
/*!********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/realtime/attendance.gateway.ts ***!
  \********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AttendanceGateway_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AttendanceGateway = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const websockets_1 = __webpack_require__(/*! @nestjs/websockets */ "@nestjs/websockets");
const socket_io_1 = __webpack_require__(/*! socket.io */ "socket.io");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
const cors_origin_util_1 = __webpack_require__(/*! ../common/cors-origin.util */ "./apps/klypto-crm-nest-js/src/common/cors-origin.util.ts");
function orgRoom(organizationId) {
    return `org:${organizationId}`;
}
let AttendanceGateway = AttendanceGateway_1 = class AttendanceGateway {
    jwtService;
    prisma;
    logger = new common_1.Logger(AttendanceGateway_1.name);
    server;
    constructor(jwtService, prisma) {
        this.jwtService = jwtService;
        this.prisma = prisma;
    }
    async handleConnection(client) {
        try {
            const token = client.handshake.auth?.token ||
                client.handshake.headers?.authorization
                    ?.toString()
                    .replace('Bearer ', '');
            if (!token) {
                throw new Error('Missing auth token');
            }
            const payload = this.jwtService.verify(token, {
                secret: process.env.JWT_ACCESS_SECRET || 'access-secret',
            });
            const user = await this.prisma.user.findUnique({
                where: { id: payload?.sub },
                select: { id: true, isActive: true, organizationId: true },
            });
            if (!user || !user.isActive || !user.organizationId) {
                throw new Error('Invalid or inactive user');
            }
            await client.join(orgRoom(user.organizationId));
        }
        catch (error) {
            this.logger.warn(`Rejected socket connection: ${error.message}`);
            client.disconnect(true);
        }
    }
    emitAttendanceUpdated(organizationId, record) {
        this.server.to(orgRoom(organizationId)).emit('attendance:updated', record);
    }
};
exports.AttendanceGateway = AttendanceGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_c = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _c : Object)
], AttendanceGateway.prototype, "server", void 0);
exports.AttendanceGateway = AttendanceGateway = AttendanceGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)({
        namespace: '/ws/attendance',
        cors: {
            origin: (origin, callback) => callback(null, (0, cors_origin_util_1.isOriginAllowed)(origin)),
            credentials: true,
        },
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _b : Object])
], AttendanceGateway);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/realtime/realtime.module.ts"
/*!*****************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/realtime/realtime.module.ts ***!
  \*****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RealtimeModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const attendance_gateway_1 = __webpack_require__(/*! ./attendance.gateway */ "./apps/klypto-crm-nest-js/src/realtime/attendance.gateway.ts");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
let RealtimeModule = class RealtimeModule {
};
exports.RealtimeModule = RealtimeModule;
exports.RealtimeModule = RealtimeModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, jwt_1.JwtModule.register({})],
        providers: [attendance_gateway_1.AttendanceGateway],
        exports: [attendance_gateway_1.AttendanceGateway],
    })
], RealtimeModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/recruitment/dto/recruitment.dto.ts"
/*!************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/recruitment/dto/recruitment.dto.ts ***!
  \************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCandidateDto = exports.CreateCandidateDto = exports.UpdateJobPostingDto = exports.CreateJobPostingDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateJobPostingDto {
    title;
    department;
    description;
    ctcMin;
    ctcMax;
    jobType;
    location;
    status;
}
exports.CreateJobPostingDto = CreateJobPostingDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Senior React Developer' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateJobPostingDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Engineering' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateJobPostingDto.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Build and maintain React apps.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateJobPostingDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 600000 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateJobPostingDto.prototype, "ctcMin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1200000 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateJobPostingDto.prototype, "ctcMax", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Full-time', enum: ['Full-time', 'Intern'] }),
    (0, class_validator_1.IsEnum)(['Full-time', 'Intern']),
    __metadata("design:type", String)
], CreateJobPostingDto.prototype, "jobType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bangalore, India' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateJobPostingDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Active', enum: ['Active', 'Paused', 'Closed'] }),
    (0, class_validator_1.IsEnum)(['Active', 'Paused', 'Closed']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateJobPostingDto.prototype, "status", void 0);
class UpdateJobPostingDto extends (0, swagger_1.PartialType)(CreateJobPostingDto) {
}
exports.UpdateJobPostingDto = UpdateJobPostingDto;
class CreateCandidateDto {
    name;
    email;
    phone;
    role;
    jobId;
    score;
    stage;
}
exports.CreateCandidateDto = CreateCandidateDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Alice Smith' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCandidateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'alice@example.com' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCandidateDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+1234567890' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCandidateDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Senior React Developer' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCandidateDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'JOB-clx...id', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCandidateDto.prototype, "jobId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 85, required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateCandidateDto.prototype, "score", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Applied',
        enum: [
            'Applied',
            'Screening',
            'Technical',
            'Interview',
            'Offered',
            'Hired',
            'Rejected',
        ],
    }),
    (0, class_validator_1.IsEnum)([
        'Applied',
        'Screening',
        'Technical',
        'Interview',
        'Offered',
        'Hired',
        'Rejected',
    ]),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCandidateDto.prototype, "stage", void 0);
class UpdateCandidateDto extends (0, swagger_1.PartialType)(CreateCandidateDto) {
}
exports.UpdateCandidateDto = UpdateCandidateDto;


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/recruitment/recruitment.controller.ts"
/*!***************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/recruitment/recruitment.controller.ts ***!
  \***************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecruitmentController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const recruitment_service_1 = __webpack_require__(/*! ./recruitment.service */ "./apps/klypto-crm-nest-js/src/recruitment/recruitment.service.ts");
const recruitment_dto_1 = __webpack_require__(/*! ./dto/recruitment.dto */ "./apps/klypto-crm-nest-js/src/recruitment/dto/recruitment.dto.ts");
const access_token_guard_1 = __webpack_require__(/*! ../auth/guards/access-token.guard */ "./apps/klypto-crm-nest-js/src/auth/guards/access-token.guard.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/roles/roles.guard */ "./apps/klypto-crm-nest-js/src/auth/roles/roles.guard.ts");
let RecruitmentController = class RecruitmentController {
    recruitmentService;
    constructor(recruitmentService) {
        this.recruitmentService = recruitmentService;
    }
    async findAllJobs(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.recruitmentService.getOrganizationId(req.user.sub);
        return this.recruitmentService.findAllJobs(orgId);
    }
    async createJob(req, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.recruitmentService.getOrganizationId(req.user.sub);
        return this.recruitmentService.createJob(orgId, dto);
    }
    async updateJob(req, id, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.recruitmentService.getOrganizationId(req.user.sub);
        return this.recruitmentService.updateJob(orgId, id, dto);
    }
    async removeJob(req, id) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.recruitmentService.getOrganizationId(req.user.sub);
        return this.recruitmentService.deleteJob(orgId, id);
    }
    async findAllCandidates(req) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.recruitmentService.getOrganizationId(req.user.sub);
        return this.recruitmentService.findAllCandidates(orgId);
    }
    async createCandidate(req, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.recruitmentService.getOrganizationId(req.user.sub);
        return this.recruitmentService.createCandidate(orgId, dto);
    }
    async updateCandidate(req, id, dto) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.recruitmentService.getOrganizationId(req.user.sub);
        return this.recruitmentService.updateCandidate(orgId, id, dto);
    }
    async removeCandidate(req, id) {
        if (!req.user?.sub)
            throw new common_1.UnauthorizedException('Invalid user context');
        const orgId = await this.recruitmentService.getOrganizationId(req.user.sub);
        return this.recruitmentService.deleteCandidate(orgId, id);
    }
};
exports.RecruitmentController = RecruitmentController;
__decorate([
    (0, common_1.Get)('jobs'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all job postings' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecruitmentController.prototype, "findAllJobs", null);
__decorate([
    (0, common_1.Post)('jobs'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new job posting' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof recruitment_dto_1.CreateJobPostingDto !== "undefined" && recruitment_dto_1.CreateJobPostingDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], RecruitmentController.prototype, "createJob", null);
__decorate([
    (0, common_1.Patch)('jobs/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a job posting' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_c = typeof recruitment_dto_1.UpdateJobPostingDto !== "undefined" && recruitment_dto_1.UpdateJobPostingDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], RecruitmentController.prototype, "updateJob", null);
__decorate([
    (0, common_1.Delete)('jobs/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a job posting' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RecruitmentController.prototype, "removeJob", null);
__decorate([
    (0, common_1.Get)('candidates'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all candidates' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecruitmentController.prototype, "findAllCandidates", null);
__decorate([
    (0, common_1.Post)('candidates'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new candidate' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_d = typeof recruitment_dto_1.CreateCandidateDto !== "undefined" && recruitment_dto_1.CreateCandidateDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], RecruitmentController.prototype, "createCandidate", null);
__decorate([
    (0, common_1.Patch)('candidates/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a candidate' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, typeof (_e = typeof recruitment_dto_1.UpdateCandidateDto !== "undefined" && recruitment_dto_1.UpdateCandidateDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], RecruitmentController.prototype, "updateCandidate", null);
__decorate([
    (0, common_1.Delete)('candidates/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a candidate' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RecruitmentController.prototype, "removeCandidate", null);
exports.RecruitmentController = RecruitmentController = __decorate([
    (0, swagger_1.ApiTags)('Recruitment'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('recruitment'),
    __metadata("design:paramtypes", [typeof (_a = typeof recruitment_service_1.RecruitmentService !== "undefined" && recruitment_service_1.RecruitmentService) === "function" ? _a : Object])
], RecruitmentController);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/recruitment/recruitment.module.ts"
/*!***********************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/recruitment/recruitment.module.ts ***!
  \***********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecruitmentModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const recruitment_service_1 = __webpack_require__(/*! ./recruitment.service */ "./apps/klypto-crm-nest-js/src/recruitment/recruitment.service.ts");
const recruitment_controller_1 = __webpack_require__(/*! ./recruitment.controller */ "./apps/klypto-crm-nest-js/src/recruitment/recruitment.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../prisma/prisma.module */ "./apps/klypto-crm-nest-js/src/prisma/prisma.module.ts");
let RecruitmentModule = class RecruitmentModule {
};
exports.RecruitmentModule = RecruitmentModule;
exports.RecruitmentModule = RecruitmentModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [recruitment_controller_1.RecruitmentController],
        providers: [recruitment_service_1.RecruitmentService],
        exports: [recruitment_service_1.RecruitmentService],
    })
], RecruitmentModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/recruitment/recruitment.service.ts"
/*!************************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/recruitment/recruitment.service.ts ***!
  \************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecruitmentService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let RecruitmentService = class RecruitmentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrganizationId(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { organizationId: true },
        });
        if (!user || !user.organizationId) {
            throw new common_1.UnauthorizedException('Invalid user context');
        }
        return user.organizationId;
    }
    async findAllJobs(organizationId) {
        return this.prisma.jobPosting.findMany({
            where: { organizationId },
            include: { _count: { select: { candidates: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    async createJob(organizationId, dto) {
        return this.prisma.jobPosting.create({
            data: { ...dto, organizationId },
        });
    }
    async updateJob(organizationId, id, dto) {
        const job = await this.prisma.jobPosting.findFirst({
            where: { id, organizationId },
        });
        if (!job)
            throw new common_1.NotFoundException('Job posting not found');
        return this.prisma.jobPosting.update({ where: { id }, data: dto });
    }
    async deleteJob(organizationId, id) {
        const job = await this.prisma.jobPosting.findFirst({
            where: { id, organizationId },
        });
        if (!job)
            throw new common_1.NotFoundException('Job posting not found');
        await this.prisma.$transaction([
            this.prisma.candidate.deleteMany({
                where: { organizationId, jobId: id },
            }),
            this.prisma.jobPosting.delete({ where: { id } }),
        ]);
        return { message: 'Job posting deleted successfully' };
    }
    async findAllCandidates(organizationId) {
        return this.prisma.candidate.findMany({
            where: { organizationId },
            include: { job: true },
            orderBy: { updatedAt: 'desc' },
        });
    }
    async createCandidate(organizationId, dto) {
        return this.prisma.candidate.create({
            data: { ...dto, organizationId },
            include: { job: true },
        });
    }
    async updateCandidate(organizationId, id, dto) {
        const candidate = await this.prisma.candidate.findFirst({
            where: { id, organizationId },
        });
        if (!candidate)
            throw new common_1.NotFoundException('Candidate not found');
        const updatedCandidate = await this.prisma.candidate.update({
            where: { id },
            data: dto,
            include: { job: true },
        });
        if (dto.stage === 'Hired' && candidate.stage !== 'Hired') {
            await this.onboardCandidate(organizationId, updatedCandidate);
        }
        return updatedCandidate;
    }
    async onboardCandidate(organizationId, candidate) {
        const code = `EMP-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
        const existing = await this.prisma.employee.findFirst({
            where: { name: candidate.name, organizationId },
        });
        if (!existing) {
            await this.prisma.employee.create({
                data: {
                    name: candidate.name,
                    role: candidate.role,
                    department: candidate.job?.department || 'General',
                    code,
                    status: 'Active',
                    organizationId,
                },
            });
        }
    }
    async deleteCandidate(organizationId, id) {
        const candidate = await this.prisma.candidate.findFirst({
            where: { id, organizationId },
        });
        if (!candidate)
            throw new common_1.NotFoundException('Candidate not found');
        return this.prisma.candidate.delete({ where: { id } });
    }
};
exports.RecruitmentService = RecruitmentService;
exports.RecruitmentService = RecruitmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], RecruitmentService);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/users/users.module.ts"
/*!***********************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/users/users.module.ts ***!
  \***********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/klypto-crm-nest-js/src/users/users.service.ts");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        providers: [users_service_1.UsersService],
        exports: [users_service_1.UsersService],
    })
], UsersModule);


/***/ },

/***/ "./apps/klypto-crm-nest-js/src/users/users.service.ts"
/*!************************************************************!*\
  !*** ./apps/klypto-crm-nest-js/src/users/users.service.ts ***!
  \************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/klypto-crm-nest-js/src/prisma/prisma.service.ts");
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findOneByEmail(email) {
        return this.prisma.user.findUnique({
            where: { email },
            include: {
                organization: true,
                roleAssignments: {
                    include: {
                        role: true,
                    },
                },
            },
        });
    }
    async findOneById(id) {
        return this.prisma.user.findUnique({
            where: { id },
            include: {
                organization: true,
                roleAssignments: {
                    include: {
                        role: true,
                    },
                },
            },
        });
    }
    async findActiveStatusById(id) {
        return this.prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                isActive: true,
            },
        });
    }
    async create(data) {
        return this.prisma.user.create({
            data,
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], UsersService);


/***/ },

/***/ "@nestjs-modules/mailer"
/*!*****************************************!*\
  !*** external "@nestjs-modules/mailer" ***!
  \*****************************************/
(module) {

module.exports = require("@nestjs-modules/mailer");

/***/ },

/***/ "@nestjs/common"
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
(module) {

module.exports = require("@nestjs/common");

/***/ },

/***/ "@nestjs/config"
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
(module) {

module.exports = require("@nestjs/config");

/***/ },

/***/ "@nestjs/core"
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
(module) {

module.exports = require("@nestjs/core");

/***/ },

/***/ "@nestjs/jwt"
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
(module) {

module.exports = require("@nestjs/jwt");

/***/ },

/***/ "@nestjs/passport"
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
(module) {

module.exports = require("@nestjs/passport");

/***/ },

/***/ "@nestjs/platform-express"
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
(module) {

module.exports = require("@nestjs/platform-express");

/***/ },

/***/ "@nestjs/swagger"
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
(module) {

module.exports = require("@nestjs/swagger");

/***/ },

/***/ "@nestjs/websockets"
/*!*************************************!*\
  !*** external "@nestjs/websockets" ***!
  \*************************************/
(module) {

module.exports = require("@nestjs/websockets");

/***/ },

/***/ "@prisma/client"
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
(module) {

module.exports = require("@prisma/client");

/***/ },

/***/ "bcryptjs"
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
(module) {

module.exports = require("bcryptjs");

/***/ },

/***/ "class-validator"
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
(module) {

module.exports = require("class-validator");

/***/ },

/***/ "events"
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
(module) {

module.exports = require("events");

/***/ },

/***/ "express"
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
(module) {

module.exports = require("express");

/***/ },

/***/ "multer"
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
(module) {

module.exports = require("multer");

/***/ },

/***/ "passport-jwt"
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
(module) {

module.exports = require("passport-jwt");

/***/ },

/***/ "rxjs"
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
(module) {

module.exports = require("rxjs");

/***/ },

/***/ "socket.io"
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
(module) {

module.exports = require("socket.io");

/***/ },

/***/ "path"
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
(module) {

module.exports = require("path");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./apps/klypto-crm-nest-js/src/main.ts");
/******/ 	
/******/ })()
;
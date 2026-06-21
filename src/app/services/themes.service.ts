import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

export interface Theme {
  id: number;
  title: string;
  description: string;
  icon: string;
  route: string;
  severity: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  constructor(
    private router: Router,
  ) { }

  themes: Theme[] = [
    {
      id: 0,
      title: 'Главная',
      description:
        'Security Demo App — навигация по лабораториям уязвимостей OWASP Top 10 для frontend.',
      icon: 'home',
      route: '/main',
      severity: 'info',
    },

    {
      id: 1,
      title: 'XSS',
      description:
        'Cross-Site Scripting: выполнение вредоносного HTML/JS через unsafe rendering или DOM manipulation. Включает classic XSS и DOM XSS сценарии.',
      icon: 'bug_report',
      route: '/xss',
      severity: 'high',
    },

    {
      id: 2,
      title: 'JWT Storage & Auth',
      description:
        'Небезопасное хранение токенов в localStorage/sessionStorage. Риск кражи токена через XSS и отсутствие httpOnly cookies.',
      icon: 'key',
      route: '/jwt-storage',
      severity: 'high',
    },

    {
      id: 3,
      title: 'Broken Access Control',
      description:
        'UI-level защита не гарантирует безопасность. Обход маршрутов, IDOR и отсутствие backend authorization checks.',
      icon: 'admin_panel_settings',
      route: '/bac',
      severity: 'high',
    },

    {
      id: 4,
      title: 'Open Redirect',
      description:
        'Перенаправление пользователя на внешние URL без валидации. Используется в phishing-атаках.',
      icon: 'open_in_new',
      route: '/open-redirect',
      severity: 'medium',
    },

    {
      id: 5,
      title: 'Insecure File Upload',
      description:
        'Загрузка файлов без проверки типа и содержимого. Возможна загрузка HTML/SVG/JS payloads.',
      icon: 'upload',
      route: '/insecure-file-upload',
      severity: 'high',
    },

    {
      id: 6,
      title: 'Security Misconfiguration',
      description:
        'Ошибки конфигурации: debug mode, verbose errors, открытые endpoints, неправильные security headers.',
      icon: 'settings',
      route: '/security-misconfig',
      severity: 'high',
    },

    {
      id: 7,
      title: 'Security Checklist',
      description:
        'Практический чеклист безопасности frontend перед релизом: XSS, auth, storage, routing, CSP.',
      icon: 'fact_check',
      route: '/checklist',
      severity: 'info',
    }
  ];

  navigate(theme: Theme): void {
    this.router.navigate([theme.route]);
  }
}

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User

class UserAdmin(BaseUserAdmin):
    list_display = ('email', 'full_name', 'is_active', 'is_superuser')
    list_filter = ('is_active', 'is_superuser')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('full_name',)}),
        ('Permissions', {'fields': ('is_active', 'is_superuser')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'full_name', 'password1', 'password2'),
        }),
    )
    search_fields = ('email', 'full_name')
    ordering = ('email',)
    filter_horizontal = ()

admin.site.register(User, UserAdmin)

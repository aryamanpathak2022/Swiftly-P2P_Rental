from django.contrib import admin

# Register your models here.
#register message model
from .models import Message,Product
admin.site.register(Message)
# register Product

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'per_day_rent', 'owner', 'renter', 'rented_on', 'returned_on', 'created_at', 'updated_at', 'is_active', 'is_deleted', 'deleted_at')
    list_filter = ('is_active', 'is_deleted')
    search_fields = ('name', 'owner__username', 'renter__username')
    date_hierarchy = 'created_at'
    readonly_fields = ('owner', 'is_active', 'is_deleted', 'deleted_at', 'created_at', 'updated_at')

admin.site.register(Product, ProductAdmin)

{{-- @props(['url'])
<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'Laravel')
<img src="https://laravel.com/img/notification-logo.png" class="logo" alt="Laravel Logo">
@else
{{ $slot }}
@endif
</a>
</td>
</tr> --}}

<tr>
    <td class="header">
        <a href="{{ config('app.url') }}" style="display: inline-block;">
            <img src="{{ asset('images/logo-light.png') }}" alt="{{ config('app.name') }}" style="height: 50px;">
        </a>
    </td>
</tr>
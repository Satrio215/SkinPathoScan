@extends('auth')

@section('content')
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="p-6 bg-gray-100 border-b border-gray-200">
                <div class="flex justify-between items-center mb-4">
                    <h1 class="text-2xl font-semibold text-blue-700">Daftar Artikel</h1>
                    <a href="{{ route('artikels.create') }}"
                        class="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition text-sm">
                        + Tambah Artikel
                    </a>
                </div>

                {{-- Notifikasi Sukses --}}
                @if (session('success'))
                    <div class="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                        {{ session('success') }}
                    </div>
                @endif

                {{-- Notifikasi Error --}}
                @if (session('error'))
                    <div class="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        {{ session('error') }}
                    </div>
                @endif

                {{-- Cek apakah ada artikel --}}
                @if ($artikels->isEmpty())
                    <p class="text-gray-600">Belum ada artikel.</p>
                @else
                    @php
                        $page = method_exists($artikels, 'currentPage') ? $artikels->currentPage() : 1;
                        $perPage = method_exists($artikels, 'perPage') ? $artikels->perPage() : 5;
                    @endphp

                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">No</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Judul</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deskripsi
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Gambar</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aksi</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                @foreach ($artikels as $artikel)
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {{ ($artikels->currentPage() - 1) * $artikels->perPage() + $loop->iteration }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {{ $artikel->judul }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {{ \Illuminate\Support\Str::limit($artikel->bio, 100) }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            @if ($artikel->gambar)
                                                <img src="{{ asset('storage/' . $artikel->gambar) }}" alt="gambar artikel"
                                                    class="w-16 rounded">
                                            @else
                                                <span class="text-gray-400">-</span>
                                            @endif
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                            <a href="{{ route('artikels.edit', $artikel->id) }}"
                                                class="border border-green-600 text-green-600 px-4 py-2 rounded-lg shadow hover:bg-green-600 hover:text-white text-sm transition">
                                                Edit
                                            </a>
                                            <form action="{{ route('artikels.delete', $artikel->id) }}" method="POST"
                                                class="inline-block"
                                                onsubmit="return confirm('Apakah Anda yakin ingin menghapus artikel ini?')">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit"
                                                    class="border border-red-600 text-red-600 px-4 py-2 rounded-lg shadow hover:bg-red-600 hover:text-white text-sm transition">
                                                    Hapus
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>

                        {{-- Pagination --}}
                        <div class="mt-6 px-6">
                            {{ $artikels->links() }}
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>
@endsection
